const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { User } = require("../models");
const { Op } = require("sequelize");

const ACCESS_SECRET = "accesssecret";
const REFRESH_SECRET = "refreshsecret";

let transporter;
nodemailer.createTestAccount().then(account => {
  transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });
});

const getCookieOptions = (maxAge) => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge
});

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: ["Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: error.errors ? error.errors.map(e => e.message) : ["Registration failed"]
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Invalid password" });

    const accessToken = jwt.sign({ id: user.id }, ACCESS_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: "7d" });

    res.cookie("accessToken", accessToken, getCookieOptions(15 * 60 * 1000));
    res.cookie("refreshToken", refreshToken, getCookieOptions(7 * 24 * 60 * 60 * 1000));

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
};

exports.refreshToken = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(401).json({ message: "No refresh token provided" });

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });
    const accessToken = jwt.sign({ id: user.id }, ACCESS_SECRET, { expiresIn: "15m" });
    res.cookie("accessToken", accessToken, getCookieOptions(15 * 60 * 1000));
    res.json({ message: "Token refreshed" });
  });
};

exports.forgotPassword = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (!user.email) return res.status(400).json({ message: "User does not have an email registered. Please contact support." });

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const resetPasswordExpires = Date.now() + 10 * 60 * 1000;

    await user.update({ resetPasswordToken, resetPasswordExpires });

    const resetUrl = `http://localhost:3000/reset-password?token=${resetToken}&username=${username}`;
    
    const message = {
      from: '"Student Management" <noreply@studentmanagement.com>',
      to: user.email,
      subject: 'Password Reset',
      text: `You requested a password reset. Please go to this link to reset your password: ${resetUrl}`,
      html: `<p>You requested a password reset. Please click <a href="${resetUrl}">here</a> to reset your password.</p>`
    };

    const info = await transporter.sendMail(message);
    const testUrl = nodemailer.getTestMessageUrl(info);
    console.log("Password reset email sent. Preview URL: %s", testUrl);

    res.json({ message: "Reset email sent.", previewUrl: testUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { username, token, newPassword } = req.body;
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({ message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character." });
    }

    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({ 
      where: { 
        username,
        resetPasswordToken,
        resetPasswordExpires: { [Op.gt]: Date.now() }
      } 
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    await user.update({
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpires: null
    });

    res.json({ message: "Password has been reset successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error resetting password" });
  }
};
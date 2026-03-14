const jwt = require("jsonwebtoken");

const ACCESS_SECRET = "accesssecret";
const REFRESH_SECRET = "refreshsecret";

module.exports = (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken && !refreshToken) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    if (accessToken) {
      const decoded = jwt.verify(accessToken, ACCESS_SECRET);
      req.userId = decoded.id;
      return next();
    }
  } catch (error) {
    // Access token invalid or expired, fall through to refresh token validation
  }

  if (!refreshToken) {
    return res.status(401).json({ message: "Access token expired and no refresh token" });
  }

  try {
    const decodedRefresh = jwt.verify(refreshToken, REFRESH_SECRET);
    
    // Generate new access token
    const newAccessToken = jwt.sign(
      { id: decodedRefresh.id },
      ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    // Set new cookie silently
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 15 * 60 * 1000 // 15 mins
    });

    req.userId = decodedRefresh.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
};
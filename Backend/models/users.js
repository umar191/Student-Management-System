"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [1, 50],
          msg: "Username must be between 1 and 50 characters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          msg: "Please provide a valid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  return User;
};
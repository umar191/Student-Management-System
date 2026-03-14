"use strict";

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty"
          },
          len: {
            args: [1, 50],
            msg: "Name must be between 1 and 50 characters"
          },
          is: {
            args: /^[A-Za-z\s]+$/,
            msg: "Name must contain only letters and spaces"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please provide a valid email address"
          },
          notEmpty: {
            msg: "Email cannot be empty"
          }
        }
      },
      course: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "Year must be a number"
          }
        }
      }
    },
    {
      tableName: "students",
      timestamps: false
    }
  );

  return Student;
};
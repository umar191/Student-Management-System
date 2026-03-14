const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const studentRoutes = require("./routes/studentroutes");
const authRoutes = require("./routes/authroutes");
const db = require("./models");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/abc', (req, res) => { 
    res.send("Welcome to Student Management API");
});
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
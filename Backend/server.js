const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentroutes");
const authRoutes = require("./routes/authroutes");
const db = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/abc', (req, res) => { 
    res.send("Welcome to Student Management API");
});
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentcontroller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, studentController.createStudent);
router.get("/", authMiddleware, studentController.getStudents);
router.put("/:id", authMiddleware, studentController.updateStudent);
router.delete("/:id", authMiddleware, studentController.deleteStudent);

module.exports = router;
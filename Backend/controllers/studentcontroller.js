const { Student } = require("../models");

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    res.status(400).json({
      message: error.errors?.map(e => e.message)
    });
  }
};

// READ
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    await Student.update(req.body, {
      where: { id: req.params.id }
    });

    res.json({ message: "Student Updated" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    await Student.destroy({
      where: { id: req.params.id }
    });

    res.json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
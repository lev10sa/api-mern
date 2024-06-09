// import student model
import Student from "../model/StudentModel.js";

// tampilkan semua data siswa
export const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// tampilkan data siswa berdasarkan id
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// menambah data siswa
export const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// update data siswa
export const updStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// menghapus data siswa
export const delStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

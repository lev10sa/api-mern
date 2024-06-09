// import controller
import {
  getStudent,
  getStudentById,
  addStudent,
  updStudent,
  delStudent,
} from "../controller/StudentController.js";

// import expressjs
import express from "express";

// buat router
const studentRouter = express.Router();

// tentukan rute
studentRouter.get("/api/students", getStudent);
studentRouter.get("/api/students/id/:id", getStudentById);
studentRouter.post("/api/students", addStudent);
studentRouter.patch("/api/students/id/:id", updStudent);
studentRouter.delete("/api/students/id/:id", delStudent);

// export router
export default studentRouter;

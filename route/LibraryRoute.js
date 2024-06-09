// import controller
import {
  getLibrary,
  getLibraryById,
  addLibrary,
  updLibrary,
  delLibrary,
} from "../controller/LibraryController.js";

// import expressjs
import express from "express";

// buat router
const libraryRouter = express.Router();

// tentukan rute
libraryRouter.get("/api/Librarys", getLibrary);
libraryRouter.get("/api/Librarys/id/:id", getLibraryById);
libraryRouter.post("/api/Librarys", addLibrary);
libraryRouter.patch("/api/Librarys/id/:id", updLibrary);
libraryRouter.delete("/api/Librarys/id/:id", delLibrary);

// export router
export default libraryRouter;

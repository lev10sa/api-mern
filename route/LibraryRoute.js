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
libraryRouter.get("/api/libraries", getLibrary);
libraryRouter.get("/api/libraries/id/:id", getLibraryById);
libraryRouter.post("/api/libraries", addLibrary);
libraryRouter.patch("/api/libraries/id/:id", updLibrary);
libraryRouter.delete("/api/libraries/id/:id", delLibrary);

// export router
export default libraryRouter;

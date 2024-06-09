// import controller
import {
  getBook,
  getBookById,
  addBook,
  updBook,
  delBook,
} from "../controller/BookController.js";

// import expressjs
import express from "express";

// buat router
const bookRouter = express.Router();

// tentukan rute
bookRouter.get("/api/books", getBook);
bookRouter.get("/api/books/id/:id", getBookById);
bookRouter.post("/api/books", addBook);
bookRouter.patch("/api/books/id/:id", updBook);
bookRouter.delete("/api/books/id/:id", delBook);

// export router
export default bookRouter;

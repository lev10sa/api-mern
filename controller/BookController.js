// import Book model
import Book from "../model/BookModel.js";

// tampilkan semua data siswa
export const getBook = async (req, res) => {
  try {
    const Books = await Book.find();
    res.status(200).json(Books);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// tampilkan data siswa berdasarkan id
export const getBookById = async (req, res) => {
  try {
    const Book = await Book.findById(req.params.id);
    res.status(200).json(Book);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// menambah data siswa
export const addBook = async (req, res) => {
  try {
    const Book = new Book(req.body);
    const saved = await Book.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// update data siswa
export const updBook = async (req, res) => {
  try {
    const Book = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(Book);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// menghapus data siswa
export const delBook = async (req, res) => {
  try {
    const Book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(Book);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

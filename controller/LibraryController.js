// import Library model
import Library from "../model/LibraryModel.js";

// tampilkan semua data siswa
export const getLibrary = async (req, res) => {
  try {
    const libs = await Library.find();
    res.status(200).json(libs);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// tampilkan data siswa berdasarkan id
export const getLibraryById = async (req, res) => {
  try {
    const lib = await Library.findById(req.params.id);
    res.status(200).json(lib);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// menambah data siswa
export const addLibrary = async (req, res) => {
  try {
    const lib = new Library(req.body);
    const saved = await lib.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// update data siswa
export const updLibrary = async (req, res) => {
  try {
    const lib = await Library.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(lib);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

// menghapus data siswa
export const delLibrary = async (req, res) => {
  try {
    const lib = await Library.findByIdAndDelete(req.params.id);
    res.status(200).json(lib);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

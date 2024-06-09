// import dependecies
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// import routes
import studentRouter from "./route/StudentRoute.js";
import libraryRouter from "./route/LibraryRoute.js";

// menggunakan dependencies
config();
const app = express();
app.use(
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  studentRouter,
  libraryRouter
);

// koneksi ke database mongodb
const uri =
  "mongodb+srv://alfiandi27_:Alfiandi2708_@mernapp.wxtw4s1.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri, {}).then(() => {
  const port = 5000;
  app.listen(port, () => console.log("server berjalan..."));
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error.message));
db.once("open", () => console.log("terkoneksi ke mongodb..."));

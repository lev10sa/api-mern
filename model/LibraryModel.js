// import depencies
import mongoose from "mongoose";

// struktur tabel
const librarySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    release: {
      type: String,
    },
    price: {
      type: String,
    },
    borrower: {
      type: String,
    },
    duration: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// export schema db
export default mongoose.model("Library", librarySchema);

// import depencies
import mongoose from "mongoose";

// struktur tabel
const bookSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

// export schema db
export default mongoose.model("Book", bookSchema);

// import depencies
import mongoose from "mongoose";

// struktur tabel
const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    class: {
      type: String,
    },
    birthday: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// export schema db
export default mongoose.model("Student", studentSchema);

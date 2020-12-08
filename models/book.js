const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookSchema = new mongoose.Schema(
  {
    dateFinished: Date,
    rating: { type: Number, min: 1, max: 10 },
    review: String,
    bookId: String,
    bookStatus: {
      type: String,
      enum: ["bookMark", "nightStand", "bookArchive"],
      default: "bookMark",
    },
    volumeInfo: {
      image: String,
      info: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);

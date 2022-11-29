const mongoose = require("mongoose"),
  bookSchema = mongoose.Schema({
    ID: String,
    name: String,
    authorName: String,
    description: String,
    bookImage: String
  });
module.exports = mongoose.model("Model", bookSchema);

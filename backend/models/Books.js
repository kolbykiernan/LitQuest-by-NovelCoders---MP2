// models/Book.js
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  readStatus: { type: Boolean, default: false }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;

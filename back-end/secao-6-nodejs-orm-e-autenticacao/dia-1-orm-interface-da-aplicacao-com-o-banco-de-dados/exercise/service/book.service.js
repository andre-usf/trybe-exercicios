const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity })
  return newBook;
}

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id } })
  return updatedBook;
}

const removeBook = async (id) => {
  const removedbook = await Book.destroy({ where: { id } })
  return removedbook;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};
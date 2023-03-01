const bookService = require('../service/book.service');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books);
}

module.exports = {
  getAll,
}

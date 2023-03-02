const bookService = require('../service/book.service');

const getAll = async (req, res) => {
  const { author } = req.query;
  if (author) {
    const booksByAuthor = await bookService.getByAuthor(author);
    return res.status(200).json(booksByAuthor);
  }
  const books = await bookService.getAll();
  return res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Livro não encontrado' })

  return res.status(200).json(book);
}

const createBook = async (req, res) => { 
  const { title, author, pageQuantity, publisher } = req.body;
  const newBook = await bookService.createBook(title, author, pageQuantity, publisher);
  return res.status(201).json(newBook);
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  const updatedBook = await bookService.updateBook(id, { title, author, pageQuantity, publisher });
  if (!updatedBook) return res.status(404).json({ message: 'Livro não encontrado'});
  return res.status(201).json({ message: 'Livro atualizado'});
}

const removeBook = async (req, res) => {
  const { id } = req.params;
  const removedbook = await bookService.removeBook(id);
  if (!removedbook) return res.status(404).json({ message: 'Livro não encontrado'});
  return res.status(200).json({ message: 'Livro removido'});
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
}

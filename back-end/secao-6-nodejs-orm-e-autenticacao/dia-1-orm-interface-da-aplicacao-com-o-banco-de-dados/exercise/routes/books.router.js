const express = require('express');
const bookController = require('../controllers/book.controller');
const router = express.Router();

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.removeBook);

module.exports = router;

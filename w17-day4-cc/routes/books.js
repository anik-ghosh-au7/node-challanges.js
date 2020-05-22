var express = require('express');
var router = express.Router();
var {BookController} = require('../controller/BookController')

/* GET books listing. */
router.get('/allbooks', BookController.allBooks);

/* Add new book. */
router.post('/add', BookController.add);

/* GET books listing according to an Author. */
router.get('/:author', BookController.booksByAuthor);

/* Update book details according to _id. */
router.put('/update/:id', BookController.updateBook);

module.exports = router;

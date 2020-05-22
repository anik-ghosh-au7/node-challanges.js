const Book = require('../model/Book');

const BookController = {};


// to add new book
BookController.add = (req, res) => {
    const book = new Book(req.body);
    book.save((err, data) => {
        if (err) {
            return res.status(400).send(err)
        } else {
            res.status(200).send({msg: 'Book added successfully!!!', data});
        };
    });
};

// to get list of all books
BookController.allBooks = (req, res) => {
    Book.find((err, data) => {
        if (err) {
            res.status(404).send({msg: "No books found!!!"});
        } else {
            res.status(200).send(data);
         };
        });
};

// to get list of books based on author
BookController.booksByAuthor = (req, res) => {
    let author = req.params.author;
    Book.find({BookAuthor: author}, (err, data) => {
        if (err) {
            res.status(404).send({msg: `No books from Author - ${author}`});
        } else {
            res.status(200).send(data);
         };
    });
};

// to update book details
BookController.updateBook = (req, res) => {
    let id = req.params.id;
    let query = Book.find({_id: id});

    if (req.body.BookName) query.updateOne({_id: id}, { $set: { BookName: req.body.BookName } });
    if (req.body.BookAuthor) query.updateOne({_id: id}, { $set: { BookAuthor: req.body.BookAuthor } });
    if (req.body.Genre) query.updateOne({_id: id}, { $set: { Genre: req.body.Genre } });
    if (req.body.PublishedYear) query.updateOne({_id: id}, { $set: { PublishedYear: req.body.PublishedYear } });
    if (req.body.Rating) query.updateOne({_id: id}, { $set: { Rating: req.body.Rating } });

    query.exec((err, result) => {
        if (err) {res.status(404).send(err)} else {
            if (result.nModified > 0) {
            res.status(200).send(result);
            } else {
                res.status(400).send({msg: 'Update Failed!!!'});
            };
        };
    });
};

module.exports = {BookController};
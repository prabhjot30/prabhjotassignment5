var book = require('../Models/model');

exports.getAllBooks = (req, res, next) => {
    book.find({}, (error, theBooks) => {
        if (error) next (error);
        req.data = theBooks;
        next();
    })
}

exports.getTheBookName1 = (req, res, next) => {
    book.find({ID: "book1"}, (error, theBooks) => {
        if (error) next (error);
        req.data = theBooks;
        next();
    })
}

exports.getTheBookName2 = (req, res, next) => {
    book.find({ID: "book2"}, (error, theBooks) => {
        if (error) next (error);
        req.data = theBooks;
        next();
    })
}

exports.getTheBookName3 = (req, res, next) => {
    book.find({ID: "book3"}, (error, theBooks) => {
        if (error) next (error);
        req.data = theBooks;
        next();
    })
}

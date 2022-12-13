var Book = require('../Models/model');

module.exports = {
    index: (req, res) => {
      Book.find({})
        .then(books => {
          res.render("books", {
            books: books
          })
        })
        .catch(error => {
          console.log(`Error fetching books: ${error.message}`)
          res.redirect("/");
        });
    },
    prabhindex: (req, res) => {
      Book.find({})
        .then(books => {
          res.render("admin", {
            books: books
          })
        })
        .catch(error => {
          console.log(`Error fetching books: ${error.message}`)
          res.redirect("/");
        });
    },
    show: (req, res, next) => {
      let bookId = req.params.id;
      Book.findById(bookId)
        .then(book => {
          res.locals.book = book;
          next();
        })
        .catch(error => {
          console.log(`Error fetching Book by ID: ${error.message}`);
          next(error);
        });
    },
    new: (req, res) => {
      res.render("new");
    },
    create: (req, res, next) => {
      let bookParams = {
        Name: req.body.Name,
        AuthorName: req.body.AuthorName
      };
      Book.create(bookParams)
        .then(books => {
          res.locals.redirect = "/admin";
          res.locals.book = books;
          next();
        })
        .catch(error => {
          console.log(`Error saving user: ${error.message}`);
          next(error);
        });
    },
    redirectView: (req, res, next) => {
      let redirectPath = res.locals.redirect;
      if (redirectPath) res.redirect(redirectPath);
      else next();  
    },
    showView: (req, res) => {
      res.render("show");
    },
    delete: (req, res, next) => {
      let bookId = req.params.id;
      Book.findByIdAndRemove(bookId)
        .then(() => {
          res.locals.redirect = "/admin";
          next();
        })
        .catch(error => {
  
          console.log(`Error deleting user by ID: ${error.message}`);
          next();
        });
    }
  };
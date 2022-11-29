const port = 3000,
  express = require("express"),
  app = express();

app.set('view engine','ejs');

app.get('/7habits', (req, res) => {
 res.render('7habits');
})

app.get('/books', (req, res) => {
  res.render('books');
})

app.get('/contact.html', (req, res) => {
 res.render('contact');
})

app.get('/honesty.html', (req, res) => {
  res.render('honesty');
})

app.get('/index.html', (req, res) => {
  res.render('index');
})

app.get('/homepage.html', (req, res) => {
  res.render('index');
})

app.get('/powerofpositive.html', (req, res) => {
  res.render('powerofpositive');
})

app.get('/searchformeaningpage.html', (req, res) => {
  res.render('searchformeaningpage');
})

app.get('/survey.html', (req, res) => {
  res.render('survey');
})

app.get("/", (req, res) => {
    res.send("Hello, Yo!");
})
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening ➥ on port number: ${3000}`);
  
  });
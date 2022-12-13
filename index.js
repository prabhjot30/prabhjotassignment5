/*https://www.youtube.com/watch?v=L72fhGm1tfE*/

const homecontroller = require("./controllers/homecontroller");

const port = 3000,
  express = require("express"),
  mongoose=require("mongoose")
  dotenv=require("dotenv")
  app = express();
  modelVar= require("./Models/model")
  controller=require("./controllers/homecontroller")
  methodOverride = require("method-override")

var uri = 'mongodb+srv://prabh:prabhjot@was500-assignment5.p4popm7.mongodb.net/?retryWrites=true&w=majority'
console.log(uri)
mongoose.connect(uri, {useUnifiedTopology: true})
app.use(
  express.urlencoded({
      extended: false
  })
);
var db= mongoose.connection

db.once("open", () => {
  console.log("Connection Successful")
})
app.use(express.static(__dirname))

app.set('view engine','ejs');
app.set("port", process.env.PORT)

app.get("/books",homecontroller.index)
app.listen(port, () => {
    console.log(`Local Host 3000`);
  
});
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET",]
  })
);
app.get("/books", homecontroller.index);
app.get("/admin", homecontroller.prabhindex)
app.get("/addnewbook", homecontroller.new);
app.post("/books/create", homecontroller.create, homecontroller.redirectView);
app.get("/books/:id", homecontroller.show, homecontroller.showView);
app.delete("/books/:id/delete", homecontroller.delete, homecontroller.redirectView);

 
/* modelVar.create(
  {
    ID: "book1",
    name: "Book: The 7 Habits of Highly Effective People",
    authorName: "Stephen R. Covey",
    description: "Publisher: Free Press,Published Date: 1989,Habit 1: Be Proactive,Habit 2: Begin With The End In Mind,Habit 3: Put First Things First,Habit 4: Think Win-Win,Habit 5: Seek First to Understand and Then To Be Understood,Habit 6: Synergize,Habit 7: Sharpen the Saw",
    bookImage: "images/7habits.jpg"
  },
  {
    ID: "book2",
    name: "Book: The Power of Positive Thinking",
    authorName: "Norman Vincent Peale",
    description: "Publisher Name: Prentice Hall,Publication date: 1952,Published in: United States (US),Made it to: New York Times Best Sellers List",
    bookImage: "images/thepowerofpositive.jpg"
  },
  {
    ID: "book3",
    name: "Book: Man's Search for Meaning",
    authorName: "Norman Victor E. Frankl",
    description: "Publisher Name: Beacon Press,Publication date: 1946,Published in: Austria (US)",
    bookImage: "images/searchformeaning.jpg"
  }
)  */

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


require('dotenv/config');

app.use(bodyParser.json());
 app.use(cors());


//Middlewares -> whenever any routes are hit somthing needs to run before showing page
//app.use('/posts',() => {
  //  console.log("middleware running for posts");
//});

//app.use(auth); -> for authentication
//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

//Routes
app.get('/',(req, res) =>{
    res.send("Hello Pranto");
});

app.get('/posts',(req, res) =>{
    res.send("Hello Pranto. I am in posts");
});

//app.post for posting form data
//app.delete 

//Connect to DB
mongoose.connect(
    //'mongodb+srv://root:1234@cluster0-804ko.mongodb.net/test?retryWrites=true&w=majority'
    process.env.DB_CONNECTION
    , { useNewUrlParser: true }
    , ()=>{
       console.log('Conncected to DB'); 
    });


//Set port for server for listening
app.listen(3000);
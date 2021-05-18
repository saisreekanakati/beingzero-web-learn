const express = require('express');
const courseLib = require('./backend/lib/courselib');
const dbconnect=require('./backend/db/dbconnect');

const app = express();
dbconnect.connect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mongoose = require('mongoose');
app.use(express.static(__dirname+"/frontend"));

// var password = process.env.Mongo_atlas_password;
// var connectionString = "mongodb+srv://saisreekanakati:"+password+"@cluster0.3mite.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(connectionString, {});
// mongoose.connection.on('connected', function(){
//     console.log("Database connected");
// });
app.get("/", function(req, res){
    res.send("Welcome to saisree's Site");
});

app.get("/resume", function(req, res){
    file=__dirname+"/resume.html";
    res.sendFile(file);
});
app.get("/resumee", function(req, res){
    file=__dirname+"/frontend/html/resume.html";
    res.sendFile(file);
});


app.get("/crud", function(req, res){
    file=__dirname+"/frontend/html/crud.html";
    res.sendFile(file);
});

app.get('/api/courses', courseLib.getallcourses);
app.post('/api/courses', courseLib.createcourse);

app.get("/pie", function(req, res){
    file=__dirname+"/frontend/html/pie.html";
    res.sendFile(file);
});
app.get("/color", function(req, res){
    file=__dirname+"/frontend/html/cpicker.html";
    res.sendFile(file);
});
app.get("/todoapp", function(req, res){
    file=__dirname+"/frontend/html/todo.html";
    res.sendFile(file);
});
app.get("/register", function(req, res){
    file=__dirname+"/frontend/html/login.html";
    res.sendFile(file);
})


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server running on http://localhost:"+PORT);
})

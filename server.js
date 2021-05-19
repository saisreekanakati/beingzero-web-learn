const express = require('express');
const mongoose = require('mongoose');
const courselib = require('./backend/lib/courselib');
const dbconnect=require('./backend/db/dbconnect');

const app = express();
dbconnect.connect();
app.use(express.static(__dirname+"/frontend"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(function(req,res,next){
    console.log("Request came");
    next();
});

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


// app.get("/crud", function(req, res){
//     file=__dirname+"/frontend/html/crud.html";
//     res.sendFile(file);
// });

// app.get('/api/courses', courselib.getallcourses);
// app.post('/api/courses',function(req,res){
//     courselib.createcourse(req,res);
// });

app.get("/crudoperations", function(req, res){
    let filePathName10=__dirname+"/frontend/html/crud.html"
    res.sendFile(filePathName10);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.post("/crud",courselib.addnewone);
app.put("/crud/:idd", courselib.update);


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


const port = process.env.PORT || 3000;
 
// Start the server
app.listen(port, function(){
    console.log("runnig server http://localhost:"+port);
})
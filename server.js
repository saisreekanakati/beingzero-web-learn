const express = require('express');

const app = express();
app.use(express.static(__dirname+"/frontend"));

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
app.get("/pie", function(req, res){
    file=__dirname+"/frontend/html/pie.html";
    res.sendFile(file);
});
app.get("/color", function(req, res){
    file=__dirname+"/frontend/html/cpicker.html";
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
    console.log("Server Starting running on http://localhost:"+PORT);
})

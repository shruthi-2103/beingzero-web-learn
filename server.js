const express = require('express');

const app = express();

app.use(express.static(__dirname+"/frontend"));
//this is home handlergit
app.get("/", function(req, res){
    res.send("Welcome to Shruthi's Basic site");
})
app.get("/resume",function(req,res){
    file=__dirname+"/resume.html";
    res.sendFile(file);
})
app.get("/resumee",function(req,res){
    file=__dirname+"/frontend/html/resume.html";
    res.sendFile(file);
})

app.get("/todolist",function(req,res){
    file=__dirname+"/frontend/html/todo.html";
    res.sendFile(file);
})

app.get("/google",function(req,res){
    file=__dirname+"/frontend/html/google.html";
    res.sendFile(file);
})

app.get("/color",function(req,res){
    file=__dirname+"/frontend/html/html-intro.html";
    res.sendFile(file);
})

app.get("/register",function(req,res){
    file=__dirname+"/frontend/html/register.html";
    res.sendFile(file);
})

app.get("/login",function(req,res){
    file=__dirname+"/frontend/html/login.html";
    res.sendFile(file);
})

app.get("/piechart",function(req,res){
    file=__dirname+"/frontend/html/piechart.html";
    res.sendFile(file);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

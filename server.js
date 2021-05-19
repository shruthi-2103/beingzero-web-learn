const express = require('express');
const courselib = require('./backend/lib/courselib');
const mongoose=require('mongoose');
const app = express();
const password=process.env.Mongo_Atlas_password; 
const connectionString="mongodb+srv://Shruthi_New:"+"Shruthi123"+"@cluster0.uaeoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.error(err));
;
// mongoose.connection.on('connected',function(){
//     console.log("Database Connected");
// })
mongoose.connection.on('connected',function(){
    console.log("DataBase Connected");
})


mongoose.connection.on('connecting',function(){
    console.log("DataBase Connecting");
})
app.use(express.static(__dirname+"/frontend"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(function(req,res,next){
    console.log("Request came");
    next();
})

var todos=[];

app.post('/api/todos',function(req,res){
    var newTodo=req.body;
    todos.push(newTodo);
    res.json(newTodo);
})

app.get('/api/alltodos',function(req,res){

    res.json(todos);
});

app.get('/api/todos/:todoId',function(req,res){

    let todoId=req.params.todoId;
    // console.log(todoId.value)
    let idx=-1;

    for(let i=0;i<todos.length;i++){
        if(todos[i].id==todoId){
            idx=i;
            break;
        }
    }

        if(idx==-1)
            res.json({error:'user not found'});
        else{
            res.json(todos[idx]);
            res.json({message:success});
        }

});


app.get("/todoList",function(req,res){
    file=__dirname+"/frontend/html/todoList.html";
    res.sendFile(file);
})


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

app.get("/crudd", function(req, res){
    filePathName=__dirname+'/frontend/html/crud.html';
    res.sendFile(filePathName);
})

app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

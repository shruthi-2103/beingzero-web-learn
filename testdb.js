const mongoose=require('mongoose');
const connectionString="mongodb+srv://shruthi:shruthi123@cluster0.arrhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connect(connectionString,{ useNewUrlParser: true}).catch(err => console.error(err));

// mongoose.connection.on('connected',function(){
//     console.log("Database Connected");
// })
mongoose.connection.on('connected',function(){
    console.log("DataBase Connected");
})

const courselib = require('./backend/lib/courselib');

courselib.createcourse({coursename:'mean stack course'},function(err,course){
    console.log(course);
})


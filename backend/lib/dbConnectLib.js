const mongoose =require('mongoose');
var dboptions={useNewUrlParser:true,useUnifiedTopology:true};
const config=require("../config/config.js")
console.log(config.mongoConnectionString);
module.exports={
    connect:function(){
        mongoose.connect(config.mongoConnectionString,{useNewUrlParser: true,useUnifiedTopology: true});
        var db=mongoose.connection;
        db.on('connected',function(){
            console.log('mongo connected')
            
        })
    }
}
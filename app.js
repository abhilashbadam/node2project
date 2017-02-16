var express=require("express");//installing module
var mongoose= require("mongodb");
var bodyParser=require("body-parser");
var app=express();//passing the funtionality
app.listen("1234",function(err){//creating port
    if(err){
        console.log("port is not working");
    }else{
        console.log("port is working");
    }
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//restfull api
var api=require("./api/user/api")();
app.use("/user/register",api);
app.use(express.static(__dirname+"/public"));
mongoose.connect("mongodb://node2project@ds143588.mlab.com:43588/abhilash410",function(err){
    if(err){
        console.log("database not working");
    }else{
        console.log("database working");
    }
});

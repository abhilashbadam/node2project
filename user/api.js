var express=require("express");
var user=require("./userSchema.js");
module.exports=function(){
  var router=express.Router() ; 
   router.post("/add",function(request,response){
       response.send("sucessfully created");
       var name=request.body.name;//post method
       //request.query.name;//this is for get method
       //response.send(name);
       var email=request.body.email;
       var phoneNumber=request.body.phoneNumber;
    var userAdd=new user({
        dbName:name,
        dbEmail:email,
        dbPhoneNumber:phoneNumber 
    });
  userAdd.save(function(err){
    if(err){
      response.send(err);
      }else{
        response.send("succesfully created schema"); 
      }  
 });  //response.json({"name":name,"email":email,"phoneNumber":phoneNumber})
   });
    //start getusers data
router.get("/getusers",function(request,response){
    var name=request.query.name;
    user.find({dbName:name},function(err,data){
      if(err){
          response.send(err);
      }else{
            response.send(data);  
          }
        });
    });
    //end get users data
//deleting record http://localhost:1234/user/register/deleteuser
 router.delete("/deleteuser",function(request,response){
     var id=request.query.id;
     //request.send(id);
     user.findByIdAndRemove(id,function(err,data){
        if(err){
            response.send(err);
        }else{
            var response={
                message:"succesfully deleted",
                status:200,
                userID:data._id
          }
            response.send(result);
        }   
     });
   });
    //end delete
//put metho starts
    router.put("/updateuser",function(request,response){
     var name=request.body.name;
     var email=request.body.email;
     var phoneNumber=request.body.phoneNumber;
     var id=request.body.id;
    user.findById(id,function(err,data){
     data.dbName=name;
    data.dbEmail=email;
    data.dbPhoneNumber=phoneNumber;
    data.save(function(err){
     if(err){
         response.send(err);
         }else{
             response.send("succesfully updated");
         }   
    });
    });
    });
    return router; 
};
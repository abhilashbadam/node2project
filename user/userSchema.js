var mongoose=require("mongoose");
var userSchema=mongoose.Schema;
var userSchemaObj=new userSchema({
    dbName:String,
    dbEmail:String,
    dbPhoneNumber:String 
});
module.exports=mongoose.model("userSchemaClass",userSchemaObj);
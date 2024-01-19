const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    moveType:{
        type:String
    },
    moveSize:{
        type:String
    },
    fromSub:{
        type:String
    },
    toSub:{
        type:String
    },
});

module.exports=mongoose.model("user",userSchema); 
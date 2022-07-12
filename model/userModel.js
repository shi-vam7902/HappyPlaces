const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userID:{
        type:Number,
         required:true
    },
    userType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usertype"
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    address:{
        type:String
    },
    gender:{
        type:String
    },
    dob:{
        type:Date
    },
    password:{
        type:String
    },
    falseAttempts:{
        type:Number
    },
    isApproved:{
        type:Boolean
    }
})


module.exports = mongoose.model("User",UserSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
    {
        userId:{
            type:String
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
            type:Number
        },
        password:{
            type:String
        }
    }// creating user Schema

)// creating schema for table 1->userType 

module.exports = mongoose.model("user",userSchema)
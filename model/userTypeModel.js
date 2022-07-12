const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userTypeSchema = new mongoose.Schema(
    {
        userTypeId :{
            type:Number,
            required:true
        },
        userTypeName:{
            type:String
        }
    }
)// creating schema for table 1->userType 

module.exports = mongoose.model("userType",userTypeSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const activitySchema = new mongoose.Schema(
    {
        actId:{
            type:Number
        },
        actType :{
            type:String
        }
    }
)// creating Activity Schema
module.exports = mongoose.model("activity",activitySchema)

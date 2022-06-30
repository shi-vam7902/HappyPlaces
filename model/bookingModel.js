const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bookingSchema = new mongoose.Schema(
    {
        bookingId:{
            type:Number
        },
        placeId:{
            type:Number
        },
        actId:{
            type:Number
        },
        userId:{
            type:Number
        },
        status:{
            type:Boolean
        },
        noOfPerson:{
            type:Number
        }
    }// creating booking  Schema

)// creating schema for table 3->booking

module.exports = mongoose.model("booking",bookingSchema)
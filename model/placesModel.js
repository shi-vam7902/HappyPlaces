const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"User"
    },
    placeID:{
        type:Number,
        required:true
    },

    placeName:{
        type:String
    },
    lat:{
        type:String
    },
    long:{
        type:String
    },
    isApproved:{
        type:Boolean
    },
    activity:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Activity"
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    totalSeats:{
        type:Number
    },
    totalPrice:{
        type:Number
    },
    totalDay:{
        type:Number
    },
    totalNight:{
        type:Number
    },
    specialInstruction:{
        type:String
    },
    isActive:{
        type:Boolean
    }
})
module.exports = mongoose.model("Place",placeSchema)

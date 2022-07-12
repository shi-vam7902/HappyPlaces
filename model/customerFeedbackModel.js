const mongoose = require("mongoose")
const customerFeedbackSchema = new mongoose.Schema({
    feedId:{
        type:Number,
        required:true
    },
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    business:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Business"
    },
    comment:{
        type:String
    },
    businessStars:{
        type:Number
    },
    isVisible:{
        type:Boolean
    }

})
module.exports = mongoose.model("Customerfeedback",customerFeedbackSchema)
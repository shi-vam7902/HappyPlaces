const mongoose = require("mongoose")
const businessSchema = mongoose.Schema(
    {
        businessId:{
            type:Number,
            required:true
        },
        businessType:{
            type:String
        },
        businessAddress:{
            type:String
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        consumerContact:{
            type:Number
        },
        emailAddress:{
            type:String
        }
    }
)


module.exports = mongoose.model("Business",businessSchema)
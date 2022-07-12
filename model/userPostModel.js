const mongoose = require("mongoose");

const UserPostSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"Post"
    },
    postCount:{
        type:Number
    }
})


module.exports = mongoose.model("Userpost",UserPostSchema)



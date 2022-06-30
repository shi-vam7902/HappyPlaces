const express = require("express")
const mongoose = require("mongoose")
const app = express()

const userTypeController = require("./controller/userTypeController")
const userController = require("./controller/userController")
const bookingController = require("./controller/bookingController")
const activityController = require("./controller/activityController") 
const postController = require("./controller/postController")
app.use(express.json())
app.use(express.urlencoded({extended:true}))



mongoose.connect("mongodb://localhost/HappyPlaces",function(err){
    if(err)
    {
        console.log("Some Thing went Wrong");
    }else{
        console.log("Db connected ....");
    }

})// database connection


//table 1 userType 
app.post("/usertype",userTypeController.addUserType)
app.delete("/usertype",userTypeController.deleteUserType)
app.put("/usertype",userTypeController.updateUserType)
app.get("/usertype",userTypeController.getAllUserType)
//table 2 user
app.post("/user",userController.addUser)
app.delete("/user",userController.deleteUser)
app.put("/user",userController.updateUser)
app.get("/user",userController.getAllUsers)
//table 3 booking
app.post("/activity",bookingController.addBooking)
app.delete("/activity",bookingController.deletebooking)
app.put("/activity",bookingController.updatebooking)
app.get("/activity",bookingController.getAllbooking)
// table 4 Activity
app.post("/activity",activityController.addActivity)
app.delete("/activity",activityController.deleteActivity)
app.put("/activity",activityController.updateActivity)
app.get("/activity",activityController.getAllActivity)
// table 5 posts
app.post("/post",postController.addPost)
app.delete("/post",postController.deletePost)
app.put("/post",postController.updatePost)
app.get("/post",postController.getAllPosts)

app.post()



app.listen(9999, function (err) {
    console.log(err);
    if (err) {
        console.log("SomeThing Went Wrong");
    } else {
        console.log("Server Started on 9999.....")
    }
}) // server connection
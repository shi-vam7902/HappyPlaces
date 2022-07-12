const express = require("express")
const mongoose = require("mongoose")
const app = express()

const userTypeController = require("./controller/userTypeController")
const userController = require("./controller/userController")
const bookingController = require("./controller/bookingController")
const activityController = require("./controller/activityController")
const postController = require("./controller/postController")
const businessController = require("./controller/businessController")
const userPostController = require("./controller/userPostController")
const placesController = require("./controller/placesController")
const customerFeedbackController = require("./controller/customerFeedbackController")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



mongoose.connect("mongodb://localhost/HappyPlaces", function (err) {
    if (err) {
        console.log("Some Thing went Wrong");
    } else {
        console.log("Db connected ....");
    }

})// database connection


//table 1 userType 
app.post("/usertype", userTypeController.addUserType)
app.delete("/usertype", userTypeController.deleteUserType)
app.put("/usertype", userTypeController.updateUserType)
app.get("/usertype", userTypeController.getAllUserType)
//table 2 user
app.post("/user", userController.addUser)
app.delete("/user", userController.deleteUser)
app.put("/user", userController.updateUser)
app.get("/user", userController.getAllUsers)
//table 3 booking
app.post("/booking", bookingController.addBooking)
app.delete("/booking", bookingController.deletebooking)
app.put("/booking", bookingController.updatebooking)
app.get("/booking", bookingController.getAllbooking)
// table 4 Activity
app.post("/activity", activityController.addActivity)
app.delete("/activity", activityController.deleteActivity)
app.put("/activity", activityController.updateActivity)
app.get("/activity", activityController.getAllActivity)
// table 5 posts
app.post("/post", postController.addPost)
app.delete("/post", postController.deletePost)
app.put("/post", postController.updatePost)
app.get("/post", postController.getAllPosts)

//table 6 business
app.post("/business", businessController.addBusiness)
app.delete("/business", businessController.deleteBusiness)
app.put("/business", businessController.updateBusiness)
app.get("/business", businessController.getAllBusiness)

//table 7 cutomerfeedback
app.post("/customerfeedback", customerFeedbackController.addCustomerFeedback)
app.delete("/customerfeedback", customerFeedbackController.deleteCustomerFeedback)
app.put("/customerfeedback", customerFeedbackController.updateCustomerFeedback)
app.get("/customerfeedback", customerFeedbackController.getAllCustomerFeedback)

// table 8 userpost
app.post("/userpost", userPostController.addUserPosts)
app.delete("/userpost", userPostController.deleteUserPosts)
app.put("/userpost", userPostController.updateUserPosts)
app.get("/userpost", userPostController.updateUserPosts)

//table 9 places
app.post("/places",placesController.addPlace)
app.delete("/places",placesController.deletePlace)
app.put("/places",placesController.updatePlace)
app.get("/places",placesController.getAllPlaces)


app.listen(9999, function (err) {
    console.log(err);
    if (err) {
        console.log("SomeThing Went Wrong");
    } else {
        console.log("Server Started on 9999.....")
    }
}) // server connection
const customerFeedbackModel = require("../model/customerFeedbackModel")
module.exports.addCustomerFeedback = function(req,res){

    let feedId = parseInt(Math.random()*1000000)
    let user = req.body.user
    let business = req.body.business
    let comment = req.comment
    let businessStars = req.body.businessStars
    let isVisible = req.body.isVisible
    
    let customerFeedback = new customerFeedbackModel({
        "feedId":feedId,
        "user":user,
        "business":business,
        "comment":comment,
        "businessStars":businessStars,
        "isVisible":isVisible
    })
    customerFeedback.save(function(err,data){
        if(err)
        {
            console.log(err);
            res.json({
                "msg":"Customer FeedBack not added",
                status:-1,
                data:err
            })
        }
        else
        {
            res.json({
                "msg":"Customer FeedBack Added",
                status:200,
                data:data
            })
        }
    })

}// add customerFeedback

module.exports.getAllCustomerFeedback = function(req,res){
    customerFeedbackModel.find().populate("user").populate("business").exec(function(err,data){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SomeThing galat gyaaa",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                "msg":"Customer Feedback reterived",
                status:200,
                data:data
            })
        }
    })
}// get all CutomerFeedBack

module.exports.deleteCustomerFeedback = function(req,res)
{
    let feedId = req.body.feedId 
    customerFeedbackModel.deleteOne({_id:feedId},function(err,data){
        console.log(err);
        if(err){
            res.json({
                msg: "Something went wrong!!!",
                status: -1,
                data: feedId
            })
        }else{
            res.json({
                msg: "Customer Feedback removed...",
                status: 200,
                data: data
            })
        }
    })

}

module.exports.updateCustomerFeedback = function(req,res){

    let feedId = req.body.feedId
    let comment = req.body.comment
    let businessStars = req.body.businessStars
    let isVisible = req.body.isVisible
    customerFeedbackModel.updateOne({_id:feedId},{comment:comment},{businessStars:businessStars},{isVisible:isVisible},function(err,data){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SomeThing Went Wrong",
                status:-1,
                data:err
            })
        }
        else
        {
            res.json({
                "msg":"Customer FeedBack updated",
                status:200,
                data:data
            })
        }
    })
    
}// update customer feedback



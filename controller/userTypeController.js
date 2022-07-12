const userTypeModel = require("../model/userTypeModel")
module.exports.addUserType = function(req,res){
   
    console.log(res.body)
    let userTypeId = parseInt(Math.random()*10000)
     userTypeName = req.body.userTypeName

    let userType = new userTypeModel(
        {
            "userTypeId":userTypeId,
            "userTypeName":userTypeName
        }
    )// creating model
    
    userType.save(function (err,data) {
    
        if(err)
        {
            console.log(err);
            res.json({
                "msg":"userType not added",
                status:-1,
                data:"SWR"
            })   
        }
        else
        {
            res.json({
                "msg":"UserType Added  added Succesfully",
                status:200,
                data:data
            })
        }
    })
}// end of addUserType


module.exports.deleteUserType = function (req,res)
{
    let userTypeId = req.body.userTypeId
    userTypeModel.deleteOne({userTypeId:userTypeId},function(err,data){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SMW",
                status:-1,
                data:userTypeId
            })
        }
        else
        {
            res.json({
                msg:"UserType removed SuccesFully",
                status:200,
                data:data
            })
        }
    })
}//delete userType


module.exports.getAllUserType = function (req,res)
{
    userTypeModel.find(function(err,sucess){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SwR",
                status:-1,
                data:err
            })
        }else{
            res.json({
                "msg":"UserType retrived",
                status:200,
                data:sucess
            })
        }
    })
}// end of get all users

module.exports.updateUserType = function(req,res)
{
    let userTypeName= req.body.userTypeName
    let userTypeId = req.body.userTypeId
   
   
    userTypeModel.updateOne({_id:userTypeId},{userTypeName:userTypeName},function(err,sucess){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SWR",
                status:-1,
                data:userTypeId
            })
        }
        else{   
            res.json({
                "msg":"UserType Data Updated",
                status:200,
                data:sucess
            })
        }
    })
}// end of Update all User
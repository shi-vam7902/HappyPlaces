const userModel = require("../model/userModel")

module.exports.addUser = function(req,res){

    console.log(req.body);

    let userId = req.body.userId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let mobileNo = req.body.mobileNo
    let address = req.body.address
    let dob = req.body.dob
    let password = req.body.password

    let user = new userModel(
        {
            "userId" : userId,
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "mobileNo":mobileNo,
            "address":address,
            "dob":dob,
            "password":password
        }
    )//

    user.save(function(err,sucess){
        if(err)
        {
            console.log(err);
            res.json({
                "msg":"user not added",
                status:-1,
                data:"SWR"
            })   
        }
        else
        {
            res.json({
                "msg":"User Added  added Succesfully",
                status:200,
                data:sucess
            })
        }
    })

}// end of add user


module.exports.deleteUser = function (req,res)
{
    let userId = req.body.userId
    userModel.deleteOne({userId:userId},function(err,data){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SMW",
                status:-1,
                data:userId
            })
        }
        else
        {
            res.json({
                msg:"User removed SuccesFully",
                status:200,
                data:data
            })
        }
    })
}//delete userType

module.exports.getAllUsers = function (req,res)
{
    userModel.find(function(err,succes){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SwR",
                status:-1,
                data:err
            })
        }
        else
        {
            res.json({
                "msg":"users retrived",
                status:200,
                data:succes
            })
        }
    })
}// end of get all users

module.exports.updateUser = function(req,res)
{
    let userId = req.body.userId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let mobileNo = req.body.mobileNo
    let address = req.body.address
    let dob = req.body.dob
    let password = req.body.password

    userModel.updateOne(
        {userId:userId},
        {firstName:firstName},
        {lastName:lastName},
        {email:email},
        {password:password},
        {mobileNo:mobileNo},
        {address:address},
        {dob:dob},
        {password:password}
        ),function(err,succes)
        {
            console.log(err);
            if(err)
            {
                res.json({
                    "msg":"SwR",
                    status:-1,
                    data:err
                })
            }
            else{
                res.json({
                    "msg":"User Updated SucessFully",
                    status:200,
                    data:succes
                })
            }   
        }
        
}// end of Update all User
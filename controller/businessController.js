const businessModel = require("../model/businessModel")
module.exports.addBusiness = function(req,res){

    let businessId = parseInt(Math.random()*1000000)
    let user = req.body.user;
    let businessType = req.body.businessType;
    let businessAddress = req.body.businessAddress;
    let consumerContact = req.body.consumerContact;
    let emailAddress = req.body.emailAddress;
    let business = new businessModel(
        {
            "businessId":businessId,
            "user":user,
            "businessType":businessType,
            "businessAddress":businessAddress,
            "consumerContact":consumerContact,
            "emailAddress":emailAddress

        }
    )

    business.save(function(err,data)
    {
        if(err)
        {
            console.log(err);
            res.json({
                "meg":"SWR",
                status:-1,
                data:data
            })
        }
        else
        {
            res.json({
                "meg":"Business Added",
                status:200,
                data:data
            })
        }
    })

}// end of adding business 
module.exports.getAllBusiness = function(req,res)
{
    businessModel.find().populate("user").exec(function(err,data){
        if(err)
        {
            console.log(err);
            res.json({
                "msg":"SomeThing Went Wrong",
                status:-1,
                data:err
            })

        }
        else
        {
            res.json({
                "msg":"Business Retrived",
                status:-1,
                data:data
            })
        }
    })
}// end of get all business
module.exports.deleteBusiness = function(req,res)
{
    let businessId = req.body.businessId
    businessModel.deleteOne({_id:businessId},function(err,data)
    {
        if(err)
        {
            console.log(err);
            res.josn({
                "msg":"SomeThing Went Wrong",
                status:-1,
                data:businessId
            })
        }
        else
        {
            res.json({
                "msg":"Business Removed",
                status:200,
                data:data
            })
        }
    })
}//delete Business

module.exports.updateBusiness = function(req,res)
{
    let businessId = req.body.businessId;
    let businessType = req.body.businessType;
    let businessAddress = req.body.businessAddress;
    let consumerContact = req.body.consumerContact;
    let emailAddress = req.body.emailAddress;
    
    businessModel.updateOne({_id:businessId},{businessType:businessType},{businessAddress:businessAddress},{consumerContact:consumerContact},function(err,data){
            
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"Something Went Wrong",
                status:-1,
                data:businessId
            })
        }
        else
        {
            res.json({
                
                "msg":"Business Update",
                status:200,
                data:data
            })
        }

        })

}// updateBusiness
const bookingModel = require("../model/bookingModel")

module.exports.addBooking = function(req,res){

    let bookingId = req.body.bookingId
    let placeId = req.body.placeId
    let actId = req.body.actId
    let userId = req.body.userId
    let status = req.body.status
    let noOfPerson = req.body.noOfPerson

    let Booking = new bookingModel(
        {
            "bookingId":bookingId,
            "placeId":placeId,
            "actId":actId,
            "userId":userId,
            "status":status,
            "noOfPerson":noOfPerson
        }
        )
        Booking.save(function(err,sucess){
        if(err)
        {
            console.log(err);
                res.json({
                    "msg":"booking  not added",
                    status:-1,
                    data:"SWR"
                })   
        }
        else
        {
            res.json({
                "msg":"Booking Added  added Succesfully",
                status:200,
                data:sucess
            })
        }
        })
}// adding a booking

module.exports.getAllbooking = function (req,res)
{
    bookingModel.find(function(err,succes){
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
                "msg":"bookings retrived",
                status:200,
                data:succes
            })
        }
    })
}// end of get all bookings
module.exports.updatebooking = function(req,res)
{
    let bookingId = req.body.bookingId
    let status = req.body.status
    let noOfPerson = req.body.noOfPerson

    bookingModel.updateOne(
        {"bookingId":bookingId},
        {"status":status} ,
        {"noOfPerson":noOfPerson}       
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
                "msg":"booking details Updated SucessFully",
                status:200,
                data:succes
            })
        }   
    }
}// end of  update booking
module.exports.deletebooking = function (req,res)
{
    let bookingId = req.body.bookingId
    bookingModel.deleteOne({bookingId:bookingId},function(err,data){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SMW",
                status:-1,
                data:bookingId
            })
        }
        else
        {
            res.json({
                msg:"booking removed SuccesFully",
                status:200,
                data:data
            })
        }
    })
}//delete booking

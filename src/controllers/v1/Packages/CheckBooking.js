const router = require('express').Router();
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const { ObjectId } = require('mongodb');
const CheckBooking = async (req,res,next)=>{
 try{
  if(req.params.id){
  const tourist = req.CurrentUser._id  

  const result = await  Bookings.findOne({_id:req.params.id}).populate('package')

  if(result){
    const totalbooking =  await  Bookings.countDocuments({package:result.package._id,tourist: tourist})
    res.json({totalbooking:totalbooking,Booking:result});
  } 
  else{
    res.json({totalbooking:0,Booking:null})
   } 
  }
  else{
      next(createError(500,'Please Provide id'));                
  }

 }catch(err){
   console.log(err)
   next(createError(500,'There is a server side errro'));                   
 } 
}
 
module.exports = CheckBooking;


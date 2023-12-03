const router = require('express').Router();
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const CancelBooking = async (req,res,next)=>{
 try{
  if(req.params.id){
  const result = await  Bookings.findOneAndDelete({_id:req.params.id})
  res.send(result);
  }
  else{
      next(createError(500,'Please Provide id'));                
  }

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
}

module.exports = CancelBooking;


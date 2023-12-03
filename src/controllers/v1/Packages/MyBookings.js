const router = require('express').Router();
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const MyBookings = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const role = req.CurrentUser.role 
  const totalData = await Bookings.countDocuments({[role === 'user' ? "tourist" : "tour_guider"]:req.CurrentUser._id});
 
  const result = await  Bookings.find({[role === 'user' ? "tourist" : "tour_guider"]:req.CurrentUser._id}).skip((page-1) * limit).limit(limit).populate('package');
  res.json({totalData:totalData , Bookings : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
}

module.exports = MyBookings;


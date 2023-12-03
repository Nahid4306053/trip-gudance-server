const router = require('express').Router();
const createError = require('http-errors');
const WishLists = require('../../../models/WishList');
const Mywishlist = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await WishLists.countDocuments({user:req.CurrentUser._id});
 
  const result = await  WishLists.find({user:req.CurrentUser._id}).skip((page-1) * limit).limit(limit).populate('package');
  res.json({totalData:totalData , WishLists : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
}

module.exports = Mywishlist;


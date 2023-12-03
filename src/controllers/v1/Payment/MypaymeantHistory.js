const router = require('express').Router();
const createError = require('http-errors');
const PaymnetHistorys = require('../../../models/PaymnetHistoryModel');
const MypaymentHistory = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await PaymnetHistorys.countDocuments({payer:req.CurrentUser._id});
 
  const result = await  PaymnetHistorys.find({payer:req.CurrentUser._id}).skip((page-1) * limit).limit(limit).populate('package');
  res.json({totalData:totalData , PaymnetHistorys : result});
  console.log(result)
 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
} 

module.exports = MypaymentHistory;
 

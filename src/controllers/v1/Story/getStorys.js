const router = require('express').Router();
const createError = require('http-errors');
const Storys = require('../../../models/Story');
const getStorys = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await Storys.countDocuments();
  const result = await  Storys.find({}).skip((page-1) * limit).limit(limit).populate('writer');
  res.json({totalData:totalData , Storys : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getStorys;


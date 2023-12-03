const router = require('express').Router();
const createError = require('http-errors');
const Packages = require('../../../models/PackageModel');
const getPackages = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};
  if(req.query.tour_type){
   query.tour_type = req.query.tour_type;
  } 
  const totalData = await Packages.countDocuments(query);
  const result = await  Packages.find(query).skip((page-1) * limit).limit(limit);
  res.json({totalData:totalData , packages : result});

 }
 catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getPackages;


const router = require('express').Router();
const createError = require('http-errors');
const Packages = require('../../../models/PackageModel');
const getSingelPackage = async (req,res,next)=>{
 try{ 
                    
  const result = await  Packages.findOne({_id:req.params.id})
  res.json(result);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
} 

module.exports = getSingelPackage;


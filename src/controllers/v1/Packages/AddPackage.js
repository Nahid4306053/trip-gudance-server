const router = require('express').Router();
const createError = require('http-errors');
const Packages = require('../../../models/PackageModel');
const AddPackage = async (req,res,next)=>{
 try{
  const result = await  Packages(req.body).save() ;
  res.send(result);

 }catch(err){
   console.log(err);
   createError(500,'There is a server side errro');                   
 }
}

module.exports = AddPackage;


const router = require('express').Router();
const createError = require('http-errors');
const WishLists = require('../../../models/WishList');
const DeleteItem = async (req,res,next)=>{
 try{
  if(req.params.id){
  const result = await  WishLists.findOneAndDelete({_id:req.params.id})
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

module.exports = DeleteItem;


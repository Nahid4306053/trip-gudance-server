const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const storys = require('../../../models/Story');


const AddStory = async (req, res, next) => {
  try {
   if(req.body){ 
    req.body.writer = req.CurrentUser._id; 
    const savedata = await storys(req.body).save();
     res.send(savedata);
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = AddStory;

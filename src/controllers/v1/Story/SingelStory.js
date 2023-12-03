const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const storys = require('../../../models/Story');



const SingelStory = async (req, res, next) => {
  try {
   if(req.params.id){ 
 
    const data = await storys.findOne({_id:req.params.id}).populate('writer')
     res.send(data);
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}

module.exports = SingelStory;

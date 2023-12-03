const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');

const BookPackage = async (req, res, next) => {
  try {
   if(req.body){ 
    const savedata = await Bookings(req.body).save();
     if(savedata){
      const tourist = req.CurrentUser._id;
      const totalBook = await  Bookings.countDocuments({$and:[
        {tourist:tourist},
        {package:savedata.package._id} 
      ]})

     res.send({totalBook:totalBook , data : savedata})
     }
     else{
      next(createError(400, "Please provide all required data"))              
     }
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = BookPackage;

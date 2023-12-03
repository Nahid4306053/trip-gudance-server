const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const whishlists = require('../../../models/WishList');



const CheackWishlist = async (req, res, next) => {
  try {
   if(req.params.id){ 
    const user = req.CurrentUser._id; 
    const data = await whishlists.findOne({$and: [ { package: req.params.id }, { user: user } ]})
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



module.exports = CheackWishlist;

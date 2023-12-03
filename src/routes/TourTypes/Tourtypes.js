const { default: mongoose } = require("mongoose");
const tourTypes = mongoose.connection.collection('tour-types')
const createError = require("http-errors");
const getTourTypes = async (req,res,next) =>{
    try{
     const tourTypesData = await tourTypes.find({}).toArray();
      res.send(tourTypesData)
    }  
    catch(err){
      console.log(err)
      next(createError(500,'There is server side error'))                 
    }              
}



module.exports = getTourTypes;


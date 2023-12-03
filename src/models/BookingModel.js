const { Schema, default: mongoose, model } = require("mongoose");


const BookingsModel = new Schema({
     tour_guider:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'Peoples'              
    },    
    tourist:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'Peoples'              
    },    
    package:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'package'              
    },
    tour_date:{
     type: Date,
     required: true,            
    } 
    ,
    status:{
     type: String,
     enum:['in review','rejected','accepted'],  
     default :"in review"          
    }                
},
{
  timestamps: true
})

const bookings = new model('bookings',BookingsModel)

module.exports = bookings;
const { Schema, default: mongoose, model } = require("mongoose");


const PaymnetHistoryModel = new Schema({
     payer:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'Peoples'              
     },    
     totalpay:{
     type: Number ,
     required: true,          
    },   
     transectionId:{
     type: String ,
     required: true,          
    },    
    package:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'package'              
    } 
                 
},
{
  timestamps: true
})

const paymentHistory = new model('paymentHistory',PaymnetHistoryModel)

module.exports = paymentHistory;
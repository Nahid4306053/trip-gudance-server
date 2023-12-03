const router = require('express').Router();
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const { default: mongoose } = require('mongoose');
const ChangeStatus = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await Bookings.findOneAndUpdate({_id: req.params.id },{status:req.body.status},{new:true});
      res.send(result);
    } else {
      next(createError(500, 'There is a server side error'));
    }
  } catch (err) {
    console.log('=this',err); 
    next(createError(500, 'There is a server side error'));
  }
}

module.exports = ChangeStatus;   

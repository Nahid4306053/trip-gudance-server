const AddPackage = require('../../controllers/v1/Packages/AddPackage');
const BookPackage = require('../../controllers/v1/Packages/BookPackage');
const MyBookings = require('../../controllers/v1/Packages/MyBookings');
const getPackages = require('../../controllers/v1/Packages/getPackages');
const getSingelPackage = require('../../controllers/v1/Packages/getSingelPackage');
const VerifyUser = require('../../middlewares/Auth/Verifyuser');
const VerifyTourGuide = require("../../middlewares/Auth/VerifyTourGuide");
const ChangeStatus = require('../../controllers/v1/Packages/ChangeStatus');
const CancelBooking = require('../../controllers/v1/Packages/CancelBooking');
const CheckBooking = require('../../controllers/v1/Packages/CheckBooking');
const Package = require('express').Router();

Package.post('/' , AddPackage);

Package.get('/all' , getPackages);

Package.get('/my-bookings' , VerifyUser ,  MyBookings );

Package.get('/booking/:id' , VerifyUser , CheckBooking );

Package.get('/singel/:id' , getSingelPackage );

Package.post('/book' , VerifyUser ,  BookPackage );
 
Package.patch('/booking/status/:id' , VerifyUser ,  VerifyTourGuide , ChangeStatus );

Package.delete('/booking/:id' , VerifyUser , CancelBooking );





  
module.exports = Package; 
const express  = require('express');
const getTourTypes = require('../../routes/TourTypes/Tourtypes');
const User = require('../../routes/People/User');
const logOut = require('../../routes/auth/logOut');
const Package = require('../../routes/Packages/Package');
const review = require('../../routes/Review/Review');
const JournyStory = require('../../routes/Story/JournyStory');
const Wishlist = require('../../routes/Wishlist/Wishlist');
const Payment = require('../../routes/Payment/Payment');
const statistics = require('../../routes/statitics/Statitics');
const router = express.Router()

router.get("/",(req,res)=>{
      res.send("listennig api version 01...")              
})

//--- /api/v1/tour-types
router.use("/tour-types" , getTourTypes)

//--- /api/v1/user
router.use("/user" , User)

//--- /api/v1/logOut
router.use("/logout" , logOut)

//--- /api/v1/Package
router.use("/package" , Package);

//--- /api/v1/review
router.use("/review" , review);

//--- /api/v1/story
router.use("/story" , JournyStory);

//--- /api/v1/wishlist
router.use("/wishlist" , Wishlist);

//--- /api/v1/payment
router.use("/payment" , Payment); 

//--- /api/v1/statistics
router.use("/statistics" , statistics); 







module.exports = router
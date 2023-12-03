const statistics = require('express').Router();
const creteError = require("http-errors");
const VerifyUser = require('../../middlewares/Auth/Verifyuser');
const VerifyAdmin = require('../../middlewares/Auth/VerifyAdmin');
const Peoples = require('../../models/PeopleModel');
const paymentHistory = require('../../models/PaymnetHistoryModel');
const bookings = require('../../models/BookingModel');

statistics.get("/", VerifyUser, VerifyAdmin, async (req, res, next) => {
  try {
    const totaluser = await Peoples.countDocuments({
      role: 'user'
    })
    const totalTourGuider = await Peoples.countDocuments({
      role: 'tour guider'
    })
    const totalRevenueResult = await paymentHistory.aggregate([{
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalpay'
        },
      },
    }, ]);

    const totalRevenue = await totalRevenueResult.length > 0 ? totalRevenueResult[0].totalRevenue : 0;

    const InReview = await bookings.countDocuments({
      status: "in review"
    })
    const Rejected = await bookings.countDocuments({
      status: "rejected"
    })
    const Accepted = await bookings.countDocuments({
      status: "accepted"
    })
    const Complited = await paymentHistory.countDocuments();

    const statics = {
      totaluser,
      totalRevenue,
      totalBookings: {
        InReview,
        Rejected,
        Accepted,
        Complited }
      ,
      totalTourGuider
    }

    res.send(statics)

  } catch (err) {
    next(creteError(500, 'There is server side error'))
  }
})


module.exports = statistics;

const getTourGuiderBaseRiview = require("../../controllers/v1/Review/GetSpecificRiviews");
const PostReview = require("../../controllers/v1/Review/PostReview");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const review = require("express").Router()

review.post("/" , VerifyUser , PostReview)
review.get("/tour-guider/:id" , getTourGuiderBaseRiview)

module.exports = review; 
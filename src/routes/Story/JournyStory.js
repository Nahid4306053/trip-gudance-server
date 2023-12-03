const AddStory = require("../../controllers/v1/Story/AddStory");
const SingelStory = require("../../controllers/v1/Story/SingelStory");
const getStorys = require("../../controllers/v1/Story/getStorys");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const JournyStory = require("express").Router()

JournyStory.post("/" , VerifyUser , AddStory)

JournyStory.get("/all"  , getStorys)

JournyStory.get("/:id"  , SingelStory)


module.exports = JournyStory;   

const AddToWishlist = require("../../controllers/v1/Wishlist/AddToWishlist");
const CheackWishlist = require("../../controllers/v1/Wishlist/CheackWishlist");
const DeleteItem = require("../../controllers/v1/Wishlist/DeleteItem");
const Mywishlist = require("../../controllers/v1/Wishlist/Mywishlist");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const Wishlist = require("express").Router()

Wishlist.post("/" , VerifyUser , AddToWishlist )

Wishlist.get("/singel/:id" , VerifyUser , CheackWishlist )

Wishlist.get("/all" , VerifyUser , Mywishlist )

Wishlist.delete("/singel/:id" , VerifyUser , DeleteItem )

module.exports = Wishlist;      
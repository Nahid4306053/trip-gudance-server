const { Schema, default: mongoose, model } = require("mongoose");

const whishlistModel = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  package: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref : 'package'
  }
}, {
  timestamps: true
})

const whishlists = new model('whishlists', whishlistModel)

module.exports = whishlists; 

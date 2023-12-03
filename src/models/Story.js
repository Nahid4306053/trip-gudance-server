const { Schema, default: mongoose, model } = require("mongoose");


const StoryModel = new Schema({
  writer : {
   type : mongoose.Types.ObjectId,
    ref : "Peoples",
    required: true,
  },
  title: {
       type: String,
       required: true
  },  
  description: {
       type: String,
       required: true
  },                   
},{
    timestamps:true
})

const storys = new model('storys',StoryModel)

module.exports = storys;
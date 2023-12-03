const mongoose = require('mongoose');

const PackageModel = new mongoose.Schema({
  gallery: {
    type: Array,
    required: true,
  },
  tour_type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  tour_plan: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  destination: {
    type: Object,
    required: true,
  },
});

const Packages = new mongoose.model('package', PackageModel);

module.exports = Packages;

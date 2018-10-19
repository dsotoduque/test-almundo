'use strict';

let mongoose = require('mongoose')

let HotelSchema = new Schema({
  hotel_name:{
    type: String
  },
  stars:{
    type: String,
    enum: ["1","2","3","4","5"]
  },
  images: [{
    type: String
  }],
  price: {
    type: String
  }
});

module.exports = mongoose.model('Hotel', HotelSchema);

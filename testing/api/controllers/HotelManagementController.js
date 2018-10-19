'use strict';
let mongoose = require('mongoose');
Hotel = mongoose.model('Hotels');

exports.list_hotels = function (req, res) {
  Hotel.find({}, function (err, hotel) {
    if (err) {
      res.send(err);
    }
    res.json(hotel);
  });
};

exports.create_hotel = function (req, res) {
  let hotel = new Hotel(req.body);
  hotel.save(function(err,curr_hotel) {
    if (err) {
      res.send(err);
    }
    res.json(curr_hotel)
  });
};

exports.get_hotel = function (req, res) {
  Hotel.findById(req.params.hotel_id, function(err, hotel) {
    if(err) {
      res.send(err);
    }
    res.json(hotel);
  })
};

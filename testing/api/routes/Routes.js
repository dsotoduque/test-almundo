'use strict';

module.exports = function (app) {
  let hotels = require('../controllers/HotelManagementController');

  app.route('/hotels')
    .get(hotels.list_hotels)
    .post(hotels.create_hotel);

  app.route('/hotel/:hotel_id')
    .get(hotels.get_hotel)
};

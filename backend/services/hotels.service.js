const hotels = require('../utils/mocks/hotels');

class HotelsService {
  constructor() {
    this.hotels = hotels;
  }

  getAll() {
    return this.hotels;
  }

  getById(id) {
    return this.hotels.find((hotel) => hotel.id === id);
  }

  update(id, data) {}

  create(data) {}

  delete(id) {}
}

module.exports = HotelsService;

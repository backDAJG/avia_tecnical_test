const MongoLib = require('../lib/mongo');
const hotels = require('../utils/mocks/hotels');

class HotelsService {
  constructor() {
    this.mongoDB = new MongoLib();
    this.collection = 'hotels';
  }

  async getAll(query) {
    const hotels = this.mongoDB.getAll(this.collection, query);
    return hotels;
  }

  getById(id) {
    const hotel = this.mongoDB.get(this.collection, id);
    return hotel;
  }

  update(id, data) {
    const updatedHotel = this.mongoDB.update(this.collection, id, data);
    return updatedHotel;
  }

  create(data) {
    const createdHotel = this.mongoDB.create(this.collection, data);
    return createdHotel;
  }

  delete(id) {
    const deletedHotel = this.mongoDB.delete(this.collection, id);
    return deletedHotel;
  }
}

module.exports = HotelsService;

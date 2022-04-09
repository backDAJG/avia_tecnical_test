const MongoLib = require('./lib/mongo');
const hotels = require('./utils/mocks/hotels');

const lib = new MongoLib();

hotels.map((hotel) => {
  delete hotel.id;
  lib.create('hotels', hotel).then((res) => console.log(res));
});

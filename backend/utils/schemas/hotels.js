const joi = require('joi');

const hotelIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createHotelSchema = {
  name: joi.string().required(),
  stars: joi.number().max(5).min(0).required(),
  price: joi.number().required(),
  image: joi.string().required(),
  amenities: joi.array().items(joi.string()),
};

const updateHotelSchema = {
  data: joi
    .object({
      name: joi.string().optional(),
      stars: joi.number().max(5).min(0).optional(),
      price: joi.number().optional(),
      image: joi.string().optional(),
      amenities: joi.array().items(joi.string()).optional(),
    })
    .required(),
  id: hotelIdSchema.required(),
};

module.exports = {
  hotelIdSchema,
  createHotelSchema,
  updateHotelSchema,
};

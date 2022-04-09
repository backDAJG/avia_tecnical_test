const boom = require('@hapi/boom');
const joi = require('joi');

const validate = (data, schema) => {
  const { error } = joi.object(schema).validate(data);
  return error;
};

const validationHandler = (schema, check = 'body') => {
  return (req, res, next) => {
    const err = validate(req[check], schema);
    err ? next(boom.badRequest(err)) : next();
  };
};

module.exports = validationHandler;

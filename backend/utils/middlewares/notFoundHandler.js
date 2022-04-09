const boom = require('@hapi/boom');

module.exports = (_req, res) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  res.status(statusCode).json(payload);
};

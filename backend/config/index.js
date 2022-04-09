require('dotenv').config();

const environmentVariables = {
  port: process.env.PORT || 3001,
  dev: process.env.NODE_ENV !== 'production',
};

module.exports = environmentVariables;

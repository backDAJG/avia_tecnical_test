require('dotenv').config();

const environmentVariables = {
  port: process.env.PORT || 3001,
  dev: process.env.NODE_ENV !== 'production',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = environmentVariables;

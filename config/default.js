require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV || 'production',
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 8080,
    protocol: process.env.PROTOCOL || 'http'
  },
};
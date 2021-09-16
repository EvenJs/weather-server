const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Open Weather API',
      version: '1.0.0',
      contact: {
        name: 'Johnson',
        email: 'yuhang0229@gmail.com',
      },
    },
  },
  apis: ['./src/controllers/*.js'], // files containing annotation as above
};

module.exports = swaggerJsdoc(options);

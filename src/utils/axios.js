const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    APPID: 'd02e4b47c5bf2bd3c9e43fe05aebaee7',
    units: 'metric',
  },
});

module.exports = instance;

const express = require('express');
// const axios = require('../utils/axios');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');

const router = express.Router();
// const { APPID } = process.env;

router.get('/:city', (req, res, next) => {
  const { city } = req.params;
  // const { weatherType } = req.query;
  weather
    .getData(city)
    .then((response) => responseFormatter(res, 200, null, response))
    .catch((err) => next(err));
});

module.exports = router;

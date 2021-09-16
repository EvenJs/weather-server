const express = require('express');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');

const router = express.Router();

router.get('/:city', (req, res, next) => {
  const { city } = req.params;

  weather
    .getData(city)
    .then((response) => responseFormatter(res, 200, null, response))
    .catch((err) => next(err));
});

module.exports = router;

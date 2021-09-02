const CurrentWeather = require('./CurrentWeather');

class ForecastWeather extends CurrentWeather {
  constructor(rawData) {
    super(rawData);
    this.time = rawData.time;
  }
}

module.exports = ForecastWeather;

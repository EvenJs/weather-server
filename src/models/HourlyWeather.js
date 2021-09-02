const CurrentWeather = require('./CurrentWeather');

class HourlyWeather extends CurrentWeather {
  constructor(rawData) {
    super(rawData);
    this.time = rawData.dt;
  }
}

module.exports = HourlyWeather;

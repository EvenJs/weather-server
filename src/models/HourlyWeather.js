class HourlyWeather {
  constructor(rawData) {
    this.date = rawData.dt;
    this.temperature = rawData.temp;
  }
}

module.exports = HourlyWeather;

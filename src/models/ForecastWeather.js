class ForecastWeather {
  constructor(rawData) {
    const { weather, temp } = rawData;
    this.time = rawData.dt;
    this.weather = weather[0].main;
    this.temperature = temp.day;
  }
}

module.exports = ForecastWeather;

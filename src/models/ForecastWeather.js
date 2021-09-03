class ForecastWeather {
  constructor(rawData) {
    const { weather, temp } = rawData;
    this.time = rawData.dt;
    this.weather = weather[0].main;
    this.weatherIcon = weather[0].icon;
    this.temperature = temp.day;
  }
}

module.exports = ForecastWeather;

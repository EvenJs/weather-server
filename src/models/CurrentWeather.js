class CurrentWeather {
  constructor(rawData) {
    const {
      dt, temp, humidity, sunrise, sunset,
    } = rawData;
    const { main, description } = rawData.weather[0];
    this.time = dt;
    this.temp = temp;
    this.sunRise = sunrise;
    this.sunSet = sunset;
    this.humidity = humidity;
    this.windSpeed = rawData.wind_speed;
    this.weather = main;
    this.weatherDescription = description;
    this.windDirection = this.calculateWindDirection(rawData.wind_deg);
  }

  // eslint-disable-next-line class-methods-use-this
  calculateWindDirection(degree) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const value = Math.floor((degree + 22.5) / 45);
    return directions[value % 8];
  }
}

module.exports = CurrentWeather;

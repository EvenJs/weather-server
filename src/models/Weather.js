const axios = require('../utils/axios');
const City = require('./City');
const CurrentWeather = require('./CurrentWeather');
const ForecastWeather = require('./ForecastWeather');
const HourlyWeather = require('./HourlyWeather');
const Time = require('./Time');

class Weather {
  // constructor() {}

  // eslint-disable-next-line class-methods-use-this
  async getData(city) {
    const queryString = `${city}`;

    const location = await axios.get('/weather', { params: { q: queryString } })
      .then((res) => res.data.coord)
      .catch((error) => error);

    return axios.get('/onecall', { params: { lat: location.lat, lon: location.lon, exclude: 'minutely' } })
      .then((dataArray) => {
        const { current, hourly, daily } = dataArray.data;

        const cityInfo = {
          name: `${city}`,
          coord: { lat: dataArray.data.lat, lon: dataArray.data.lon },
        };

        const weather = {
          time: new Time(dataArray.data),
          city: new City(cityInfo),
          current: new CurrentWeather(current),
          daily: daily.map((i) => new ForecastWeather(i)),
          hourly: hourly.map((i) => new HourlyWeather(i)),
        };

        return weather;
      });
  }
}

module.exports = new Weather();

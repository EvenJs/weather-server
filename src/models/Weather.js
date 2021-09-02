const axios = require('../utils/axios');
const City = require('./City');
const CurrentWeather = require('./CurrentWeather');
const ForecastWeather = require('./ForecastWeather');
const HourlyWeather = require('./HourlyWeather');

class Weather {
  // eslint-disable-next-line no-useless-constructor
  // constructor() {}

  // eslint-disable-next-line class-methods-use-this
  async getData(city) {
    const queryString = `${city}`;
    // console.log(queryString);
    const location = await axios.get('/weather', { params: { q: queryString } })
      .then((res) => res.data.coord)
      .catch((error) => error);
    // console.log(location);
    // console.log(123, location);
    return axios.get('/onecall', { params: { lat: location.lat, lon: location.lon, exclude: 'minutely' } })
      .then((dataArray) => {
        console.log(999, dataArray.data);
        const { current, hourly, daily } = dataArray.data;
        // console.log(1, current);
        // console.log(2, hourly);
        // console.log(3, daily);
        const cityInfo = {
          neme: queryString,
          coord: { lat: dataArray.data.lat, lon: dataArray.data.lat },

        };
        const weather = {
          city: new City(cityInfo),
          current: new CurrentWeather(current),
          daily: daily.map((i) => new ForecastWeather(i)),
          hourly: hourly.map((i) => new HourlyWeather(i)),
        };
        return weather;
      });
    // const current = dataArray[0].data;
    // const forcast = dataArray[1].data;
    // });
  }
}

module.exports = new Weather();

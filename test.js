const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    APPID: 'de69afd1f26877e34f47989397ff77a3',
    units: 'metric',
  },
});

function getCity(city) {
  const queryString = `${city}`;
  instance.get('/weather', { params: { q: queryString } })
    .then((res) => {
    // .catch((error) => console.log(error));
    // {
      const { lat, lon } = res.data.coord;
      // const lat = lat;
      // const lon = lon;
      // return res.data
      console.log (`lat: ${res.data.coord.lat}, lon: ${res.data.coord.lon}`);
      console.log(1, lat);
      console.log(2, lon);
      return (lat, lon);
    });
}

async function getData(city) {
  const queryString = `${city}`;
  const location = await instance.get('/weather', { params: { q: queryString } })
    .then((res) => res.data.coord);
  console.log(123, location);
  instance.get('/onecall', { params: { lat: location.lat, lon: location.lon, exclude: 'minutely' } })
    .then((res) => console.log(222, res.data));
}

// const sting = getCity('sydney');
getData('sydney');
// console.log(sting);

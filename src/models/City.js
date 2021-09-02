class City {
  constructor(rawData) {
    const { name, coord } = rawData;
    this.name = name;
    this.coord = coord;
  }
}

module.exports = City;

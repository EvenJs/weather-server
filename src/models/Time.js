class Time {
  constructor(rawData) {
    this.timeZone = rawData.timezone;
    this.timeShift = rawData.timezone_offset;
  }
}

module.exports = Time;

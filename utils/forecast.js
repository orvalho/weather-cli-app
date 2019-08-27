const request = require('request');

const forecast = (long, lat, callback) => {
    const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${long}?exclude=minutely,hourly,alerts,flags`;
    request({url, json: true}, (err, {body} = {}) => {
        if (err) {
            callback('Unable to connect to weather services!');
        } else if (body.error) {
            callback('Unable to find location. Try another search.');
        } else {
            const {temperature: temp, precipProbability: rain, windSpeed: wind} = body.currently;
            const {summary} = body.daily.data[0];
            callback(undefined, {temp, rain, wind, summary});
        }
    });
};

module.exports = forecast;
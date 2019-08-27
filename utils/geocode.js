const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAP_BOX_KEY}&limit=1`;
    request({url, json: true}, (err, {body} = {}) => {
        if (err) {
           callback('Unable to connect to location services!');
        } else if (!body.features.length) {
            callback('Unable to find location. Try another search.');
        } else {
            const {place_name: location, center: [long, lat]} = body.features[0];
            callback(undefined, {long, lat, location});
        }
    });
};

module.exports = geocode;
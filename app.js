const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

require('dotenv').config();

const address = process.argv[2];

if (!address) {
    console.log(chalk.red.inverse('Please provide an address!'));
} else {
    geocode(address, (err, {long, lat, location} = {}) => {
        if (err) {
           return console.log(chalk.red.inverse(err));
        }
    
        forecast(long, lat, (err, {temp, rain, wind, summary} = {}) => {
            if (err) {
                return console.log(chalk.red.inverse(err));
             }

             console.log(chalk.green.inverse(`Results for ${location}:`));
             console.log(chalk.green.inverse(`${summary} It is currently ${Math.round(temp)} °F.`));
             console.log(chalk.green.inverse(`There is a ${rain * 100}% chance of rain, wind speed - ${Math.round(wind)} mph.`));
        });
    });
}








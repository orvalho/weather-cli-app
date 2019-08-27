## Weather app 🌞

I built this app in order to get practice with asynchronous Node.js (http requests, callbacks).

This is a cli weather app. User provides the location in terminal. Behind the scenes app takes provided location and (using map box api) works out geographic coordinates. Then using these coordinates app (with the help of dark sky api) prints the weather in terminal for user to see.

#### Install

    $ git clone https://github.com/orvalho/weather-cli-app
    $ cd weather-cli-app
    $ npm install
    // acquire api keys for dark sky and mapbox
    // create .env file and set DARK_SKY_KEY and MAP_BOX_KEY to the keys you obtained

#### Start

    $ node app.js <location>

#### Example Usage
  
    $ node app.js boston
    // if location consists of more than one word - use the quotation marks 
    $ node app.js "new york"   

#### Stack

-   request
-   chalk
-   dotenv
-   dark sky api
-   mapbox api



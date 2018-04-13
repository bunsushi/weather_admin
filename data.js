var fs = require('fs');
var moment = require('moment');
var User = require('./user.js')

var WeatherAdmin = function () {
    // Make constructor User from user.js
    this.newUserSearch = function (name, location) {
        var newUserSearch = new User(name, location);
        var logTxt =
            "\nName: " +
            newUserSearch.name +
            " Location: " +
            newUserSearch.location +
            " Date: " +
            moment(newUserSearch.dat).format('MM-DD-YYYY');

        fs.appendFile("log.txt", logTxt, function (err, data) {
            if (err) {
                return console.log(err);
            }
            // Append user search results to log.txt 
            newUserSearch.getWeather();
        });
    };
    // Retrieves all data from log.txt
    this.getData = function () {
        fs.readFile("log.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        });
    }
}

// var test = new WeatherAdmin();
// test.getData();
// test.newUserSearch("Tegan", "Philadelphia, PA");

module.exports = WeatherAdmin
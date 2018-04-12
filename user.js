var weather = require('weather-js');

var User = function (name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
    this.getWeather = function () {
        weather.find({ search: this.location, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    }
}

var test = new User('Tegan', 'Philadelphia, PA');
test.getWeather();
console.log(test.date);

module.exports = User;
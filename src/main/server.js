var rpi = require('./controller/RaspberryPiController');
var arduino = require('./controller/ArduinoController');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

rpi(app);
arduino(app);

console.log('RaspberryPi Arduino I/O RESTful API server started on: ' + port);
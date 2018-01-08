var gpio = require('rpi-gpio');

gpio.setup(4, gpio.DIR_IN, readInput);
gpio.setup(5, gpio.DIR_IN, readInput);
gpio.setup(6, gpio.DIR_IN, readInput);
gpio.setup(12, gpio.DIR_IN, readInput);
gpio.setup(13, gpio.DIR_IN, readInput);
gpio.setup(16, gpio.DIR_IN, readInput);
gpio.setup(17, gpio.DIR_IN, readInput);
gpio.setup(18, gpio.DIR_IN, readInput);
gpio.setup(19, gpio.DIR_IN, readInput);
gpio.setup(20, gpio.DIR_IN, readInput);
gpio.setup(21, gpio.DIR_IN, readInput);
gpio.setup(22, gpio.DIR_IN, readInput);
gpio.setup(23, gpio.DIR_IN, readInput);
gpio.setup(24, gpio.DIR_IN, readInput);
gpio.setup(25, gpio.DIR_IN, readInput);
gpio.setup(27, gpio.DIR_IN, readInput);

exports.readInput = function (pin) {
    gpio.read(pin, function (err, value) {
        return value;
    });
};
var sal = require('../sal/RaspberryPiSal.js');

exports.readPin = function (pin) {
    return sal.readInput(pin);
};
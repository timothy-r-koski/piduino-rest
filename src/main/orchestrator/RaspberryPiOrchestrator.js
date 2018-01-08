'use strict';

var esl = require('../esl/RaspberryPiEsl.js');

exports.readPin = function (pin) {
    return esl.readPin(pin);
};
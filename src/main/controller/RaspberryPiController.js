'use strict';

var orchestrator = require('../orchestrator/RaspberryPiOrchestrator.js');

var read_a_pin = function(req, res) {
    res.json(orchestrator.readPin(req.params.pin));
};

module.exports = function(app) {
    // todoList Routes
    app.route('/rpi/gpio/:pin')
        .get(read_a_pin);
};
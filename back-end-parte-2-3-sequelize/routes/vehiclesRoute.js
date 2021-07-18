const express = require('express');

const vehiclesController = require('../controllers/vehicleController');
const route = express.Router();

route.get('/', vehiclesController.getAll);

module.exports = route;
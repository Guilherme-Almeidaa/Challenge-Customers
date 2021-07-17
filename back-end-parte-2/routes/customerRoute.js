const express = require('express');


const route = express.Router();
const customersController = require('../controllers/customersController');

route.get('/', customersController.getAll);
route.get('/:id', customersController.findById)
route.post('/register', customersController.create)

module.exports = route;
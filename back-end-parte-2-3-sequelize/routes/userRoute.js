const express = require('express');

const { validateEmailAndPassaword } = require('../middlewares/validateEmailPasswordMiddleware');

const userController = require('../controllers/usersController');
const route = express.Router();

route.post('/register', validateEmailAndPassaword, userController.createUser);
route.get('/:id', userController.findById);

module.exports = route;
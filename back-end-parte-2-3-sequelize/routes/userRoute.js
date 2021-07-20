const express = require('express');

const { validateEmailAndPassaword, checkEmailExists } = require('../middlewares/validateEmailPasswordMiddleware');
const validateMatchPassword = require('../middlewares/validatePassworldMatchMiddleware');
const userController = require('../controllers/usersController');
const route = express.Router();

route.post('/register', validateEmailAndPassaword, checkEmailExists, userController.createUser);
route.post('/login', validateMatchPassword, userController.userLogin);
route.get('/:id', userController.findById);

module.exports = route;
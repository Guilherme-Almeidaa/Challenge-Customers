const express = require('express');
const { checkFieldsIsEmptyMiddleware } = require('../middlewares/customerMiddleare');

const route = express.Router();
const customersController = require('../controllers/customersController');
const auth = require('../middlewares/auth');

route.get('/', auth, customersController.getAll);
route.get('/search', auth, customersController.findByName);
route.get('/:id', auth, customersController.findById);
route.post('/register',
    auth,
    checkFieldsIsEmptyMiddleware,
    customersController.create);
route.put('/update/:id',
    auth,
    checkFieldsIsEmptyMiddleware,
    customersController.update);
route.delete('/delete/:id', auth, customersController.deleteCustomer);

module.exports = route;
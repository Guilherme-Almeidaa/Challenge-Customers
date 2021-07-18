const express = require('express');
const { checkFieldsIsEmptyMiddleware } = require('../middlewares/customerMiddleare');

const route = express.Router();
const customersController = require('../controllers/customersController');

route.get('/', customersController.getAll);
route.get('/search', customersController.findByName);
route.get('/:id', customersController.findById);
route.post('/register',
    checkFieldsIsEmptyMiddleware,
    customersController.create);
route.put('/update/:id',
    checkFieldsIsEmptyMiddleware,
    customersController.update);
route.delete('/delete/:id', customersController.deleteCustomer);

module.exports = route;
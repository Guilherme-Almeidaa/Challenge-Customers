const { Vehicle } = require('../models');

const getAll = async () => {
    const result = await Vehicle.findAll();
    return result;
}

module.exports = {
    getAll,
}
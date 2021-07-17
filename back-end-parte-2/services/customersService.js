const { Customer, Vehicle } = require('../models');
const { Op } = require('sequelize');
const { addVehicle, deleteVehicles } = require('./VehiclesCustomersService');

const getAll = async () => {
    const result = await Customer.findAll({
        attributes: ['id', 'name', 'lastName_corporateName', 'type']
    });
    return result;
}

const findById = async (id) => {
    const result = await Customer.findOne({
        where: {
            id
        },
        include: [
            {
                model: Vehicle,
                as: 'vehicle',
                through: { attributes: [] },
            },
        ]
    })

    return result;
}

const create = async (customer, vehiclesId) => {

    const result = await Customer.create(customer, vehiclesId);
    await addVehicle(vehiclesId, result.id);

    return result;
}

const update = async (customer, vehiclesId, id) => {
    const checkExistsCustomer = await findById(id);
    if (!checkExistsCustomer) return null;
    await Customer.update(customer, {
        where: { id }
    })
    await deleteVehicles(id);
    await addVehicle(vehiclesId, id);
    const result = await findById(id);
    return result;
}

const findByName = async (name) => {
    const result = await Customer.findAll({
        where: {
            name: { [Op.like]: `%${name}%` }
        }
    }, {
        attributes: ['id', 'name', 'lastName_corporateName', 'type']
    })

    return result;
}

module.exports = {
    getAll,
    findById,
    create,
    update,
    findByName,
}
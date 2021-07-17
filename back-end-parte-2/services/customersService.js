const { Customer, Vehicle } = require('../models');
const Customers = require('../models/customers');


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

const create = async (customer) => {
    const result = await Customer.create(customer)
    return result;
}

module.exports = {
    getAll,
    findById,
    create,
}
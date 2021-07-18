const { VehiclesCustomer } = require('../models');


const addVehicle = async (vehiclesId, customerId) => {
    await vehiclesId.map((id) => {
        VehiclesCustomer.create({
            customerId,
            vehicleId: id
        })
    })

    return true
}

const deleteVehicles = async (id) => {
    await VehiclesCustomer.destroy({
        where: {
            customerId: id
        }
    })

    return true
}

module.exports = {
    addVehicle,
    deleteVehicles
}
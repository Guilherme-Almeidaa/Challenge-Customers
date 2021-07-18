module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('VehiclesCustomers',
    [
      {
        customerId: 1,
        vehicleId: 2,
      },
      {
        customerId: 2,
        vehicleId: 3,
      },
      {
        customerId: 1,
        vehicleId: 1,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('VehiclesCustomers', null, {}),
};

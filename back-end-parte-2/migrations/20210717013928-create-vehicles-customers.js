'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VehiclesCustomers', {
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
        unique: false,
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vehicles',
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
        unique: false,
      }

    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('VehiclesCustomers');
  }
};
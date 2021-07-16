module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Vehicles',
    [
      {
        type: "Caminhão",
        client_id: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        type: "Carro",
        client_id: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        type: "Moto",
        client_id: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Vehicles', null, {}),
};

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Adresses',
    [
      {
        cep: "23324-32423",
        road: "vinte cinco de março",
        number: "248",
        city: "Betim",
        state: "MG - Minas Gerais",
        client_id: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        cep: "23324-32423",
        road: "vinte quetro de março",
        number: "242",
        city: "São Paulo",
        state: "SP - São Paulo",
        client_id: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Adresses', null, {}),
};

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Vehicles',
    [
      {
        type: "Caminhão",
      },
      {
        type: "Carro",
      },
      {
        type: "Moto",
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Vehicles', null, {}),
};

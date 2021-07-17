module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Customers',
    [
      {
        name: 'Guilherme',
        lastName_corporateName: 'Almeida',
        type: 'Pessoa Física',
        status: true,
        cpf_cnpj: "123-123-123-10",
        email: "gui.s.a@live.com",
        telephone: "235343543",
        service_hours: "20:20",
        service_date: "2021-06-07",
        cep: "23324-32423",
        road: "vinte quetro de março",
        number: "242",
        city: "São Paulo",
        state: "SP - São Paulo",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: "Pedro",
        lastName_corporateName: "José",
        type: "Pessoa Física",
        status: true,
        cpf_cnpj: "123-123-123-10",
        email: "pedro.s.a@live.com",
        telephone: "235343543",
        service_hours: "20:20",
        service_date: "2021-06-07",
        cep: "23324-32423",
        road: "vinte cinco de março",
        number: "248",
        city: "Betim",
        state: "MG - Minas Gerais",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Customers', null, {}),
};



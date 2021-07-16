const Customers = (sequelize, DataTypes) => {
  const Customers = sequelize.define("Customers", {
    name: DataTypes.STRING,
    lastName_corporateName: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    cpf_cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    service_hours: DataTypes.TIME,
    service_date: DataTypes.DATE,
  });

  return Customers;
};

module.exports = Customers;
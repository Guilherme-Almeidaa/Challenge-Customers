const Adresses = (sequelize, DataTypes) => {
  const Adresses = sequelize.define("Adresses", {
    cep: DataTypes.STRING,
    road: DataTypes.STRING,
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    client_id: { type: DataTypes.INTEGER, foreignKey: true },
  });

  Adresses.assiciate = (models) => {
    Adresses.belongsTo(models.customer, {
      foreignKey: 'id',
      as: 'customer',
    });
  };

  return Adresses;
};

module.exports = Adresses;
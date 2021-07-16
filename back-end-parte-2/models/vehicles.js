const Vehicles = (sequelize, DataTypes) => {
  const Vehicles = sequelize.define("Vehicles", {
    type: DataTypes.STRING,
    client_id: { type: DataTypes.INTEGER, foreignKey: true },
  });

  Vehicles.assiciate = (models) => {
    Vehicles.belongsTo(models.customer, {
      foreignKey: 'id',
      as: 'customer',
    });
  };

  return Vehicles;
};

module.exports = Vehicles;
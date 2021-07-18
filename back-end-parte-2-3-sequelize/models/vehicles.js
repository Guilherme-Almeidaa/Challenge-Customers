const Vehicles = (sequelize, DataTypes) => {
  const Vehicles = sequelize.define("Vehicle", {
    type: DataTypes.STRING,
  }, {
    timestamps: false
  });

  return Vehicles;
};

module.exports = Vehicles;
module.exports = (sequelize, DataTypes) => {
  const VehiclesCustomers = sequelize.define('VehiclesCustomer', {
    customerId: { type: DataTypes.INTEGER, primaryKey: true },
    vehicleId: { type: DataTypes.INTEGER, primaryKey: true },
  }, { timestamps: false });
  VehiclesCustomers.associate = (models) => {
    models.Vehicle.belongsToMany(models.Customer, {
      as: 'customer',
      through: VehiclesCustomers,
      forignKey: 'vehicleId',
      otherKey: 'customerId',
    });
    models.Customer.belongsToMany(models.Vehicle, {
      as: 'vehicle',
      through: VehiclesCustomers,
      forignKey: 'customerId',
      otherKey: 'vehicleId',
    });
  };
  return VehiclesCustomers;
};
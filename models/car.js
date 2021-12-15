'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation, CarDetails }) {
      this.hasMany(Reservation, { foreignKey: 'carId', as: 'reservations', onDelete: 'cascade', onUpdate: 'cascade', hooks: true });
      this.hasOne(CarDetails);
    }
  };
  Car.init({
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Car }) {
        this.belongsTo(Car, { foreignKey: 'carId', as: 'car' })
    }
  };
  Reservation.init({
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    pricePerDay: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
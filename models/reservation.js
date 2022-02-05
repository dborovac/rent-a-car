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
    static associate({ Car, User }) {
        this.belongsTo(Car, { foreignKey: 'carId' });
        this.belongsTo(User, { foreignKey: 'userId' });
    }
  };
  Reservation.init({
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
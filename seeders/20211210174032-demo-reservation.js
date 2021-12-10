'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        startDate: new Date("2019-09-24T00:00:00"),
        endDate: new Date("2019-09-28T00:00:00"),
        pricePerDay: 13.99,
        carId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date("2019-01-02T00:00:00"),
        endDate: new Date("2019-01-28T00:00:00"),
        pricePerDay: 13.99,
        carId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};

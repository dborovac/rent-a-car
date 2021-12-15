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
      },
      {
        startDate: new Date("2020-05-04T00:00:00"),
        endDate: new Date("2020-05-11T00:00:00"),
        pricePerDay: 15.49,
        carId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date("2020-09-15T00:00:00"),
        endDate: new Date("2020-09-29T00:00:00"),
        pricePerDay: 20.99,
        carId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date("2021-07-27T00:00:00"),
        endDate: new Date("2021-08-09T00:00:00"),
        pricePerDay: 20.99,
        carId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date("2021-12-01T00:00:00"),
        endDate: new Date("2021-12-09T00:00:00"),
        pricePerDay: 9.99,
        carId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};

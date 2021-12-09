'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
        manufacturer: 'Toyota',
        model: 'Yaris',
        year: 2012,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Chevrolet',
        model: 'Spark',
        year: 2013,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Renault',
        model: 'Twingo',
        year: 2009,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Fiat',
        model: '500',
        year: 2016,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        year: 2011,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};

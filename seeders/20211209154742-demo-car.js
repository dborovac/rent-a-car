'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
        manufacturer: 'Toyota',
        model: 'Yaris',
        year: 2012,
        detailsId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Chevrolet',
        model: 'Spark',
        year: 2013,
        detailsId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Renault',
        model: 'Twingo',
        year: 2009,
        detailsId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Fiat',
        model: '500',
        year: 2016,
        detailsId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        year: 2011,
        detailsId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Alfa Romeo',
        model: 'Giulietta',
        year: 2016,
        detailsId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Audi',
        model: 'Q5',
        year: 2014,
        detailsId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Dacia',
        model: 'Duster',
        year: 2017,
        detailsId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};

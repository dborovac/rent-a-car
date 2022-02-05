'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
        manufacturer: 'Toyota',
        model: 'Yaris',
        year: 2012,
        detailsId: 1,
        pricePerDay: 9.99,
        image: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1903/19033589/ab3cbe524061-800x600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Chevrolet',
        model: 'Spark',
        year: 2013,
        detailsId: 5,
        pricePerDay: 9.19,
        image: 'https://media.ed.edmunds-media.com/chevrolet/spark/2013/oem/2013_chevrolet_spark_4dr-hatchback_2lt_fq_oem_10_1600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Renault',
        model: 'Twingo',
        year: 2009,
        detailsId: 6,
        pricePerDay: 8.55,
        image: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1913/19131809/d6d59d080407-640x480.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Fiat',
        model: '500',
        year: 2016,
        detailsId: 3,
        pricePerDay: 12.89,
        image: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1930/19306323/c928b77869b7-800x600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        year: 2011,
        detailsId: 2,
        pricePerDay: 7.99,
        image: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1894/18944294/ec26b82a1a81-800x600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Alfa Romeo',
        model: 'Giulietta',
        year: 2016,
        detailsId: 7,
        pricePerDay: 17.77,
        image: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1890/18905613/8f75dc30f168-800x600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Audi',
        model: 'Q5',
        year: 2014,
        detailsId: 2,
        pricePerDay: 14.01,
        image: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1880/18806568/e7fadbd53a88-800x600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Dacia',
        model: 'Duster',
        year: 2021,
        detailsId: 8,
        pricePerDay: 18.55,
        image: 'https://nova.rs/wp-content/uploads/2021/06/1624350484-Small-3472-NewDaciaDuster-750x500.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};

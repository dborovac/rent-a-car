'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Reservations', 'pricePerDay'),
      queryInterface.addColumn(
        'Cars',
        'pricePerDay',
        {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
    ]);
  },
};

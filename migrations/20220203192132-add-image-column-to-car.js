'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Cars',
        'image',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Cars', 'image'),
    ]);
  },
};


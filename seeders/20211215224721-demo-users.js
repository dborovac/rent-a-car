'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      email: 'foo@bar.xyz',
      password: 'p4ssw0rd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'bar@foo.xyz',
      password: 'pwpw1212',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'gay@bar.xyz',
      password: 'ww00ddrrppdd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'loo@tar.xyz',
      password: 'pwmypw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'zoo@war.xyz',
      password: 'psswrrd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'lorem@ipsum.net',
      password: 'drowssap',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

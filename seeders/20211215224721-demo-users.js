'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      email: 'foo@bar.xyz',
      password: 'p4ssw0rd',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'bar@foo.xyz',
      password: 'pwpw1212',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'gay@bar.xyz',
      password: 'ww00ddrrppdd',
      role: 'Moderator',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'loo@tar.xyz',
      password: 'pwmypw',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'zoo@war.xyz',
      password: 'psswrrd',
      role: 'Moderator',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'lorem@ipsum.net',
      password: 'drowssap',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

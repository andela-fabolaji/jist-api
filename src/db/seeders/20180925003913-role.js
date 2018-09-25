'use strict';

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('roles', [
      {
        title: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};

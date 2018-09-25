'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up(queryInterface) {
   return queryInterface.bulkInsert('users', [
     {
       firstname: 'admin',
       lastname: 'admin',
       handle: 'admin',
       email: 'admin@jist.com',
       password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
       roleId: 1,
       isVerified: true,
       status: 'active',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  }
};

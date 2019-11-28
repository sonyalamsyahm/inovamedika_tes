'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('statuses', [{
        nama: 'menikah',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: 'belum menikah',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('statuses', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('agamas', [{
        nama: 'Islam',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: 'Kristen',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('agamas', null, {});
  }
};

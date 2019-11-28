'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('goldars', [{
        nama: 'a',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: 'b',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: '0',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('goldars', null, {});
  }
};

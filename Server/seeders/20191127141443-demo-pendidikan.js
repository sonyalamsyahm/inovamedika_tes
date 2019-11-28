'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pendidikans', [{
        nama: 'sd',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: 'smp',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: 'sma',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }, {
        nama: 's1',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pendidikans', null, {});
  }
};

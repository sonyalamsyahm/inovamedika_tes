'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('polikliniks', [{
        nama: 'Poli Gigi',
        createdAt : Sequelize.fn('NOW'),
        updatedAt : Sequelize.fn('NOW') 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('polikliniks', null, {});
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const poliklinik = sequelize.define('poliklinik', {
    nama: DataTypes.STRING
  }, {});
  poliklinik.associate = function(models) {
    // associations can be defined here
  };
  return poliklinik;
};
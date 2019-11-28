'use strict';
module.exports = (sequelize, DataTypes) => {
  const pendidikan = sequelize.define('pendidikan', {
    nama: DataTypes.STRING
  }, {});
  pendidikan.associate = function(models) {
    // associations can be defined here
  };
  return pendidikan;
};
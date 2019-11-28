'use strict';
module.exports = (sequelize, DataTypes) => {
  const agama = sequelize.define('agama', {
    nama: DataTypes.STRING
  }, {});
  agama.associate = function(models) {
    // associations can be defined here
  };
  return agama;
};
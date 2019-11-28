'use strict';
module.exports = (sequelize, DataTypes) => {
  const goldar = sequelize.define('goldar', {
    nama: DataTypes.STRING
  }, {});
  goldar.associate = function(models) {
    // associations can be defined here
  };
  return goldar;
};
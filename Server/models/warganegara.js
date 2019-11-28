'use strict';
module.exports = (sequelize, DataTypes) => {
  const warganegara = sequelize.define('warganegara', {
    nama: DataTypes.STRING
  }, {});
  warganegara.associate = function(models) {
    // associations can be defined here
  };
  return warganegara;
};
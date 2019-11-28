'use strict';
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    nama: DataTypes.STRING
  }, {});
  status.associate = function(models) {
    // associations can be defined here
  };
  return status;
};
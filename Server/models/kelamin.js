'use strict';
module.exports = (sequelize, DataTypes) => {
  const kelamin = sequelize.define('kelamin', {
    nama: DataTypes.STRING
  }, {});
  kelamin.associate = function(models) {
    // associations can be defined here
  };
  return kelamin;
};
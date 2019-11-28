'use strict';
module.exports = (sequelize, DataTypes) => {
  const pasien = sequelize.define('pasien', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kodya: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    jeniskelaminId: DataTypes.INTEGER,
    telepon: DataTypes.STRING,
    pendidikanId: DataTypes.INTEGER,
    pekerjaan: DataTypes.STRING,
    agamaId: DataTypes.INTEGER,
    warganegaraId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    goldarId: DataTypes.INTEGER,
    penanggungjawab: DataTypes.STRING,
    poliklinikId: DataTypes.INTEGER
  }, {});
  pasien.associate = function(models) {
    pasien.belongsTo(models.poliklinik, {
      foreignKey : 'poliklinikId'
    })
    pasien.belongsTo(models.kelamin, {
      foreignKey : 'jeniskelaminId'
    })
    pasien.belongsTo(models.pendidikan, {
      foreignKey : 'pendidikanId'
    })
    pasien.belongsTo(models.agama, {
      foreignKey : 'agamaId'
    })
    pasien.belongsTo(models.status, {
      foreignKey : 'statusId'
    })
    pasien.belongsTo(models.goldar, {
      foreignKey : 'goldarId'
    })
    pasien.belongsTo(models.warganegara, {
      foreignKey : 'warganegaraId'
    })
  };
  return pasien;
};
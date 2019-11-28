"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pasiens",
      [
        {
          nama: "Ujang",
          alamat: "Jl Bungur",
          kelurahan: "Desa Bungur",
          kecamatan: "Camat-camat",
          kodya: "subang",
          umur: 12,
          jeniskelaminId: 1,
          telepon: "08588273812",
          pendidikanId: 2,
          pekerjaan: "Belum bekerja",
          agamaId: 1,
          warganegaraId: 1,
          statusId: 2,
          goldarId: 3,
          penanggungjawab: "Freeda",
          poliklinikId: 1,
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pasiens", null, {});
  }
};

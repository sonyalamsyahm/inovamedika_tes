'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pasiens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kodya: {
        type: Sequelize.STRING
      },
      umur: {
        type: Sequelize.INTEGER
      },
      jeniskelaminId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelamins',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      telepon: {
        type: Sequelize.STRING
      },
      pendidikanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pendidikans',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      agamaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'agamas',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      warganegaraId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'warganegaras',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'statuses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      goldarId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'goldars',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      penanggungjawab: {
        type: Sequelize.STRING,
      },
      poliklinikId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'polikliniks',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pasiens');
  }
};
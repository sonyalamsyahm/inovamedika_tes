"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          email: "admin@admin.com",
          password: "admin",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};

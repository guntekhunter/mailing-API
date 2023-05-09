"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Samsul",
          email: "samsul@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guntek",
          email: "guntek@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Kempegowda international Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mysuru international Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mangalore international Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BijuPattanaik international Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "inderaGandhi international Airport",
          cityId: 12,
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

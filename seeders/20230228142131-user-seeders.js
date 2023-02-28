"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "ridho",
          profession: "Admin Micro",
          role: "admin",
          email: "ridho@mail.com",
          password: await bcrypt.hash("admin123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "rachmat",
          profession: "Front End Developer",
          role: "student",
          email: "rachmat@mail.com",
          password: await bcrypt.hash("student123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      "master_education",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        education_name: {
          type: Sequelize.STRING(150),
          unique: false,
          allowNull: false,
          comment: "ชื่อ ระดับการศึกษา",
        },
        sort: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          comment: "ลำดับ",
        },
      },
      {
        schema: "master", // default: public, PostgreSQL only.
        comment: "ตาราง ระดับการศึกษา", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable({
      tableName: "master_education",
      schema: "master",
    });
  },
};

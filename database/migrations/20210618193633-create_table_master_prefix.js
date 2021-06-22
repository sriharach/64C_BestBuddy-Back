"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable(
      "master_prefix",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          comment: "รหัสหลักคำนำหน้าชื่อ",
          primaryKey: true,
        },
        prefix_name: {
          type: Sequelize.STRING(150),
          unique: false,
          allowNull: false,
          comment: "คำนำหน้า",
        },
        sort: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          comment: "ลำดับ",
        },
      },
      {
        schema: "master", // default: public, PostgreSQL only.
        comment: "ตาราง คำนำหน้า", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable({
      tableName: "master_prefix",
      schema: "master",
    });
  },
};

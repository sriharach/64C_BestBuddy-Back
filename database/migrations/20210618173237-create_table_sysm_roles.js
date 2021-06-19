"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* สร้าง ตาราง sysmusers */
    return await queryInterface.createTable(
      "sysm_roles",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        roles_name: {
          type: Sequelize.STRING(150),
          unique: true,
          allowNull: false,
          comment: "ชื่อสิทธิ์",
        },
        sort: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          comment: "ลำดับ",
        },
      },
      {
        schema: "system", // default: public, PostgreSQL only.
        comment: "ตาราง สิทธิ์ผู้ใช้งาน", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return await queryInterface.dropTable({
      tableName: "sysm_roles",
      schema: "system",
    });
  },
};

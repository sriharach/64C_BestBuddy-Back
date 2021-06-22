"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    const data = [
      {
        id: "acee244f-a2db-47e7-89cc-3f63cb8e5731",
        roles_name: "ผู้ใช้งาน",
        sort: "3",
      },
    ];

    return await queryInterface.bulkInsert( { tableName: 'sysm_roles', schema: 'system' }, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};

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
        id: "6f2a5fbc-b5f7-4d7b-a2a9-142794927f58",
        roles_name: "ผู้ดูแลระบบ",
        sort: "1",
      },
      {
        id: "f0589940-417b-47e9-8e23-b1b6fdf91e1c",
        roles_name: "ตัวแทนขายประกัน",
        sort: "2",
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

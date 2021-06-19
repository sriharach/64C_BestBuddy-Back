"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeConstraint(
      { tableName: "sysm_roles", schema: "system" },
      "sysm_roles_roles_name_key",
    );
  },

  down: async (queryInterface, Sequelize) => {},
};

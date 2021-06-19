'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createSchema("bestbuddy_data");
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropSchema("bestbuddy_data");
  }
};

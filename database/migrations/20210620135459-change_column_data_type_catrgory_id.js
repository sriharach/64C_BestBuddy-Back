'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn({
      tableName: "dat_blog",
      schema: "bestbuddy_data",
    }, "category_id", { //ชื่อ column
      allowNull: true,
      type: Sequelize.UUID,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn({
      tableName: "dat_blog",
      schema: "bestbuddy_data",
    }, "category_id")
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: "a2bdfa13-bc07-49d7-a0a9-24578b65774d",
        user_id: "7c50c775-f527-4d36-818a-9314b95b6c21",
        first_name_th: "super",
        last_name_th: "admin",
        first_name_en: "super",
        last_name_en: "admin",
      }
    ];

    return await queryInterface.bulkInsert( { tableName: 'dat_person', schema: 'bestbuddy_data' }, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

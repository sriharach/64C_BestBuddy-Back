'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: "7c50c775-f527-4d36-818a-9314b95b6c21",
        username: "superadmin",
        password: "$2a$05$J5VOAZ0eQacg0rYHWCeigu2RI7eZwZAa//oJmb3./VyXyWMNGOhca",
        email: "devs.interset@gmail.com",
        roles_id: "6f2a5fbc-b5f7-4d7b-a2a9-142794927f58",
        isuse: 1,
        created_by: "7c50c775-f527-4d36-818a-9314b95b6c21",
        created_date: new Date()
      }
    ];

    return await queryInterface.bulkInsert( { tableName: 'sysm_users', schema: 'system' }, data, {});
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

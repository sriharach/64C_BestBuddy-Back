'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: "9bbce263-29df-4921-91af-eb6b04d179da",
        prefix_name: "นาย",
        sort: "1",
      },
      {
        id: "312e6040-1f50-4284-9f08-ebeabd593333",
        prefix_name: "นางสาว",
        sort: "2",
      },
      {
        id: "dfbc0bd7-dc86-4f2c-aded-9bddc5ac26c5",
        prefix_name: "นาง",
        sort: "3",
      },
    ];

    return await queryInterface.bulkInsert( { tableName: 'master_prefix', schema: 'master' }, data, {});
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};

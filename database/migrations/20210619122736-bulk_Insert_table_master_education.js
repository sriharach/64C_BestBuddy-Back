'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: "bd55d1af-a6ba-43ce-98e3-fd8878aaa0d8",
        education_name: "ม.3",
        sort: 1,
      },
      {
        id: "fbf3f903-70be-4a74-9a86-607f32af9307",
        education_name: "ม.6",
        sort: 2,
      },
      {
        id: "2827b210-be56-4582-a269-77fe1f22bd0d",
        education_name: "ปวส.",
        sort: 3,
      },
      {
        id: "31f08744-57bf-4c67-9de1-b97412930891",
        education_name: "ปวช.",
        sort: 4,
      },
      {
        id: "05bd1155-7454-4c6f-bf9a-356ef506a7a9",
        education_name: "ปริญญาตรี",
        sort: 5,
      },
      {
        id: "bd61d173-bbb0-4517-ac72-f74d986e577e",
        education_name: "สูงกว่าปริญญาตรี",
        sort: 6,
      }
    ];

    return await queryInterface.bulkInsert( { tableName: 'master_education', schema: 'master' }, data, {});
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

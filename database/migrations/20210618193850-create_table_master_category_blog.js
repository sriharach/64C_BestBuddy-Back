'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      "master_category_blog",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        category_name: {
          type: Sequelize.STRING(150),
          unique: false,
          allowNull: false,
          comment: "ชื่อ ประเภท หมวด",
        },
        sort: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          comment: "ลำดับ",
        },
      },
      {
        schema: "master", // default: public, PostgreSQL only.
        comment: "ตาราง ประเภท หมวด ของ blog", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable({
      tableName: "master_category_blog",
      schema: "master",
    });
  }
};

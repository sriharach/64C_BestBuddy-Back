'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      "dat_blog",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          comment: "รหัสหลักหน้า blog",
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.UUID,
          allowNull: false,
          comment: "รหัส ตาราง ประเภท หมวด ของ blog",
          references: {
            model: {
              tableName: "master_category_blog",
              schema: "master",
            },
            key: "id",
          },
        },
        blog_title: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "หัวข้อ",
        },
        blog_detail: {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: "รายละเอียด",
        },
        path_img: {
          type: Sequelize.JSON,
          allowNull: true,
          comment: "ที่จัดเก็บรูป",
        },
        blog_count: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: "จำนวนคนเข้าชม",
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "สถานะ : 1 = บทความ , 2 = กิจกรรมบริษัท",
        },
        isuse: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "สถานะ : 0 = ยกเลิก , 1 = ใช้งาน",
        },
        created_by: {
          type: Sequelize.UUID,
          allowNull: false,
          comment: "สร้างข้อมูลโดย",
          references: {
            model: {
              tableName: "sysm_users",
              schema: "system",
            },
            key: "id",
          },
        },
        created_date: {
          type: Sequelize.DATE,
          allowNull: false,
          comment: "สร้างข้อมูลวันที่",
        },
        update_by: {
          type: Sequelize.UUID,
          allowNull: true,
          comment: "แก้ไขข้อมูลโดย",
          references: {
            model: {
              tableName: "sysm_users",
              schema: "system",
            },
            key: "id",
          },
        },
        update_date: {
          type: Sequelize.DATE,
          allowNull: true,
          comment: "แก้ไขข้อมูลวันที่",
        },
      },
      {
        schema: "bestbuddy_data", // default: public, PostgreSQL only.
        comment: "ตาราง บทความ", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: "dat_blog",
      schema: "bestbuddy_data",
    });
  }
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      "master_position",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          comment: "รหัสหลักตำแหน่งงานผู้สมัคร",
          primaryKey: true,
        },
        position_name: {
          type: Sequelize.STRING(150),
          allowNull: false,
          comment: "ชื่อตำแหน่งงาน",
        },
        position_detail: {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: "รายละเอียดงาน",
        },
        detail: {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: "รายละเอียดงาน",
        },
        responsibility: {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: "หน้าที่ความรับผิดชอบ",
        },
        required_properties: {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: "คุณสมบัติที่จำเป็น",
        },
        isuse: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "สถานะ : 0 = ไม่ใช้งาน , 1 = เปิดรับสมัคร , 2 = ปิดรับสมัคร",
        },
        sort: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          comment: "ลำดับ",
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
        schema: "master", // default: public, PostgreSQL only.
        comment: "ตาราง ตำแหน่งงาน", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable({
      tableName: "master_position",
      schema: "master",
    });
  },
};

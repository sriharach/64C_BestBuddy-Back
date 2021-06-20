"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* สร้าง ตาราง sysmusers */
    return await queryInterface.createTable(
      "sysm_users",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          comment: "รหัสหลักผู้ใช้งานระบบ",
          primaryKey: true,
        },
        username: {
          type: Sequelize.STRING(150),
          unique: true,
          allowNull: false,
          comment: "ชื่อผู้ใช้",
        },
        password: {
          type: Sequelize.STRING(150),
          allowNull: false,
          comment: "รหัสผ่าน",
        },
        email: {
          type: Sequelize.STRING(150),
          unique: true,
          allowNull: false,
          comment: "อีเมล",
        },
        roles_id: {
          type: Sequelize.UUID,
          allowNull: false,
          comment: "รหัสตารางข้อมูลสิทธิ์การใช้งานระบบ sysm_roles",
          references: {
            model: {
              tableName: "sysm_roles",
              schema: "system",
            },
            key: "id",
          },
        },
        isuse: {
          type: Sequelize.SMALLINT,
          unique: false,
          allowNull: false,
          comment: "สถานะ : 0 = ยกเลิก , 1 = ใช้งาน",
        },
        created_by: {
          type: Sequelize.UUID,
          unique: false,
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
          unique: false,
          allowNull: false,
          comment: "สร้างข้อมูลวันที่",
        },
        update_by: {
          type: Sequelize.UUID,
          unique: false,
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
          unique: false,
          allowNull: true,
          comment: "แก้ไขข้อมูลวันที่",
        },
      },
      {
        schema: "system", // default: public, PostgreSQL only.
        comment: "ตาราง ผู้ใช้งาน", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: "sysm_users",
      schema: "system",
    });
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      "dat_person",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          comment: "รหัสหลักข้อมูลส่วนบุคคล",
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.UUID,
          allowNull: false,
          comment: "รหัสตาราง sysm_users",
          references: {
            model: {
              tableName: "sysm_users",
              schema: "system",
            },
            key: "id",
          },
        },
        prefix_id: {
          type: Sequelize.UUID,
          allowNull: true,
          comment: "คำนำหน้า (รหัสตาราง master_prefix)",
          references: {
            model: {
              tableName: "master_prefix",
              schema: "master",
            },
            key: "id",
          },
        },
        first_name_th: {
          type: Sequelize.STRING(200),
          allowNull: true,
          comment: "ชื่อจริง (ไทย)",
        },
        last_name_th: {
          type: Sequelize.STRING(200),
          allowNull: true,
          comment: "นามสกุล (ไทย)",
        },
        first_name_en: {
          type: Sequelize.STRING(200),
          allowNull: true,
          comment: "ชื่อจริง (อังกฤษ)",
        },
        last_name_en: {
          type: Sequelize.STRING(200),
          allowNull: true,
          comment: "นามสกุล (อังกฤษ)",
        },
        nick_name: {
          type: Sequelize.STRING(100),
          allowNull: true,
          comment: "ชื่อเล่น",
        },
        gender: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: "เพศ : 1 = ชาย , 2 = หญิง , null = ไม่ระบุ",
        },
        birthday: {
          type: Sequelize.DATEONLY,
          allowNull: true,
          comment: "วันเกิด",
        },
        id_card: {
          type: Sequelize.STRING(20),
          allowNull: true,
          comment: "เลขบัตรประชาชน",
        },
        id_card: {
          type: Sequelize.STRING(20),
          allowNull: true,
          comment: "เลขบัตรประชาชน",
        },
        passport_number: {
          type: Sequelize.STRING(20),
          allowNull: true,
          comment: "เลขหนังสือเดินทาง",
        },
        insurance_code: {
          type: Sequelize.STRING(20),
          allowNull: true,
          comment: "รหัสตัวแทนประกัน",
        },
      },
      {
        schema: "bestbuddy_data", // default: public, PostgreSQL only.
        comment: "ตารางข้อมูลบุคคล", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: "dat_person",
      schema: "bestbuddy_data",
    });
  },
};

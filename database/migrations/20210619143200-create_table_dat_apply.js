"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      "dat_apply",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          comment: "รหัสหลักสมัครงาน",
          primaryKey: true,
        },
        position_id: {
          type: Sequelize.ARRAY(Sequelize.UUID),
          allowNull: true,
          comment: "รหัสตารางตำแหน่งงาน",
        },
        prefix_id: {
          type: Sequelize.UUID,
          allowNull: true,
          comment: "รหัสตารางคำนำหน้าชื่อ",
          references: {
            model: {
              tableName: "master_prefix",
              schema: "master",
            },
            key: "id",
          },
        },
        fullname_th: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "ชื่อ - สกุล ไทย",
        },
        fullname_en: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "ชื่อ - สกุล ไทย",
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
        height: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: "ส่วนสูง",
        },
        weight: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: "น้ำหนัก",
        },
        address: {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: "ที่อยู่",
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: true,
          comment: "email",
        },
        facebook: {
          type: Sequelize.STRING(100),
          allowNull: true,
          comment: "facebook",
        },
        line: {
          type: Sequelize.STRING(100),
          allowNull: true,
          comment: "line",
        },
        phone_number: {
          type: Sequelize.STRING(100),
          allowNull: true,
          comment: "เบอร์ติดต่อ",
        },
        education_id: {
          type: Sequelize.UUID,
          allowNull: true,
          comment: "ระดับการศึกษา (รหัสตาราง master_education)",
          references: {
            model: {
              tableName: "master_education",
              schema: "master",
            },
            key: "id",
          },
        },
        expected_salary: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
          comment: "เงินเดือนที่คาดหวัง",
        },
        work_experience: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: "ประสบการทำงาน",
        },
        last_position: {
          type: Sequelize.STRING(100),
          allowNull: true,
          comment: "ตำแหน่งล่าสุด",
        },
        path_upload: {
          type: Sequelize.JSON,
          allowNull: true,
          comment: "ตำแหน่งล่าสุด",
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
        comment: "ตาราง สมัครงาน", // comment for table
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable({
      tableName: "dat_apply",
      schema: "bestbuddy_data",
    });
  },
};

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface master_positionAttributes {
  id?: string;
  position_name: string;
  position_detail?: string;
  detail?: string;
  responsibility?: string;
  required_properties?: string;
  isuse: number;
  sort?: number;
  created_by: string;
  created_date: Date;
  update_by?: string;
  update_date?: Date;
}

export type master_positionPk = "id";
export type master_positionId = master_position[master_positionPk];
export type master_positionCreationAttributes = Optional<master_positionAttributes, master_positionPk>;

export class master_position extends Model<master_positionAttributes, master_positionCreationAttributes> implements master_positionAttributes {
  id?: string;
  position_name!: string;
  position_detail?: string;
  detail?: string;
  responsibility?: string;
  required_properties?: string;
  isuse!: number;
  sort?: number;
  created_by!: string;
  created_date!: Date;
  update_by?: string;
  update_date?: Date;

  // master_position belongsTo sysm_users via created_by
  created_by_sysm_user!: sysm_users;
  getCreated_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setCreated_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createCreated_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;
  // master_position belongsTo sysm_users via update_by
  update_by_sysm_user!: sysm_users;
  getUpdate_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUpdate_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUpdate_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof master_position {
    master_position.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักตำแหน่งงานผู้สมัคร",
      primaryKey: true
    },
    position_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ชื่อตำแหน่งงาน"
    },
    position_detail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียดงาน"
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียดงาน"
    },
    responsibility: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "หน้าที่ความรับผิดชอบ"
    },
    required_properties: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "คุณสมบัติที่จำเป็น"
    },
    isuse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "สถานะ : 0 = ไม่ใช้งาน , 1 = เปิดรับสมัคร , 2 = ปิดรับสมัคร"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "สร้างข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "สร้างข้อมูลวันที่"
    },
    update_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "แก้ไขข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "แก้ไขข้อมูลวันที่"
    }
  }, {
    sequelize,
    tableName: 'master_position',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "master_position_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_position;
  }
}

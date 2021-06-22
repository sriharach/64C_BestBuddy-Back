import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sysm_roles, sysm_rolesId } from './sysm_roles';

export interface sysm_usersAttributes {
  id?: string;
  username: string;
  password: string;
  email: string;
  roles_id: string;
  isuse: number;
  created_by: string;
  created_date: Date;
  update_by?: string;
  update_date?: Date;
}

export type sysm_usersPk = "id";
export type sysm_usersId = sysm_users[sysm_usersPk];
export type sysm_usersCreationAttributes = Optional<sysm_usersAttributes, sysm_usersPk>;

export class sysm_users extends Model<sysm_usersAttributes, sysm_usersCreationAttributes> implements sysm_usersAttributes {
  id?: string;
  username!: string;
  password!: string;
  email!: string;
  roles_id!: string;
  isuse!: number;
  created_by!: string;
  created_date!: Date;
  update_by?: string;
  update_date?: Date;

  // sysm_users belongsTo sysm_roles via roles_id
  role!: sysm_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<sysm_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<sysm_roles, sysm_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<sysm_roles>;
  // sysm_users belongsTo sysm_users via created_by
  created_by_sysm_user!: sysm_users;
  getCreated_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setCreated_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createCreated_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;
  // sysm_users belongsTo sysm_users via update_by
  update_by_sysm_user!: sysm_users;
  getUpdate_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUpdate_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUpdate_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sysm_users {
    sysm_users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักผู้ใช้งานระบบ",
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ชื่อผู้ใช้",
      unique: "sysm_users_username_key"
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "รหัสผ่าน"
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "อีเมล",
      unique: "sysm_users_email_key"
    },
    roles_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสตารางข้อมูลสิทธิ์การใช้งานระบบ sysm_roles",
      references: {
        model: 'sysm_roles',
        key: 'id'
      }
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะ : 0 = ยกเลิก , 1 = ใช้งาน"
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
    tableName: 'sysm_users',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "sysm_users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sysm_users_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  return sysm_users;
  }
}

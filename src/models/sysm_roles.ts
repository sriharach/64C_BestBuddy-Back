import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface sysm_rolesAttributes {
  id?: string;
  roles_name: string;
  sort?: number;
}

export type sysm_rolesPk = "id";
export type sysm_rolesId = sysm_roles[sysm_rolesPk];
export type sysm_rolesCreationAttributes = Optional<sysm_rolesAttributes, sysm_rolesPk>;

export class sysm_roles extends Model<sysm_rolesAttributes, sysm_rolesCreationAttributes> implements sysm_rolesAttributes {
  id?: string;
  roles_name!: string;
  sort?: number;

  // sysm_roles hasMany sysm_users via roles_id
  sysm_users!: sysm_users[];
  getSysm_users!: Sequelize.HasManyGetAssociationsMixin<sysm_users>;
  setSysm_users!: Sequelize.HasManySetAssociationsMixin<sysm_users, sysm_usersId>;
  addSysm_user!: Sequelize.HasManyAddAssociationMixin<sysm_users, sysm_usersId>;
  addSysm_users!: Sequelize.HasManyAddAssociationsMixin<sysm_users, sysm_usersId>;
  createSysm_user!: Sequelize.HasManyCreateAssociationMixin<sysm_users>;
  removeSysm_user!: Sequelize.HasManyRemoveAssociationMixin<sysm_users, sysm_usersId>;
  removeSysm_users!: Sequelize.HasManyRemoveAssociationsMixin<sysm_users, sysm_usersId>;
  hasSysm_user!: Sequelize.HasManyHasAssociationMixin<sysm_users, sysm_usersId>;
  hasSysm_users!: Sequelize.HasManyHasAssociationsMixin<sysm_users, sysm_usersId>;
  countSysm_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sysm_roles {
    sysm_roles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักสิทธิ์เข้าใช้งานระบบ",
      primaryKey: true
    },
    roles_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ชื่อสิทธิ์"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'sysm_roles',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return sysm_roles;
  }
}

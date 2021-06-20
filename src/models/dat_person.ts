import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { master_prefix, master_prefixId } from './master_prefix';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface dat_personAttributes {
  id?: string;
  user_id: string;
  prefix_id?: string;
  first_name_th?: string;
  last_name_th?: string;
  first_name_en?: string;
  last_name_en?: string;
  nick_name?: string;
  gender?: number;
  birthday?: string;
  id_card?: string;
  passport_number?: string;
  insurance_code?: string;
}

export type dat_personPk = "id";
export type dat_personId = dat_person[dat_personPk];
export type dat_personCreationAttributes = Optional<dat_personAttributes, dat_personPk>;

export class dat_person extends Model<dat_personAttributes, dat_personCreationAttributes> implements dat_personAttributes {
  id?: string;
  user_id!: string;
  prefix_id?: string;
  first_name_th?: string;
  last_name_th?: string;
  first_name_en?: string;
  last_name_en?: string;
  nick_name?: string;
  gender?: number;
  birthday?: string;
  id_card?: string;
  passport_number?: string;
  insurance_code?: string;

  // dat_person belongsTo master_prefix via prefix_id
  prefix!: master_prefix;
  getPrefix!: Sequelize.BelongsToGetAssociationMixin<master_prefix>;
  setPrefix!: Sequelize.BelongsToSetAssociationMixin<master_prefix, master_prefixId>;
  createPrefix!: Sequelize.BelongsToCreateAssociationMixin<master_prefix>;
  // dat_person belongsTo sysm_users via user_id
  user!: sysm_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dat_person {
    dat_person.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักข้อมูลส่วนบุคคล",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสตาราง sysm_users",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    prefix_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "คำนำหน้า (รหัสตาราง master_prefix)",
      references: {
        model: 'master_prefix',
        key: 'id'
      }
    },
    first_name_th: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "ชื่อจริง (ไทย)"
    },
    last_name_th: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "นามสกุล (ไทย)"
    },
    first_name_en: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "ชื่อจริง (อังกฤษ)"
    },
    last_name_en: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "นามสกุล (อังกฤษ)"
    },
    nick_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อเล่น"
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เพศ : 1 = ชาย , 2 = หญิง , null = ไม่ระบุ"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันเกิด"
    },
    id_card: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "เลขบัตรประชาชน"
    },
    passport_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "เลขหนังสือเดินทาง"
    },
    insurance_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "รหัสตัวแทนประกัน"
    }
  }, {
    sequelize,
    tableName: 'dat_person',
    schema: 'bestbuddy_data',
    timestamps: false,
    indexes: [
      {
        name: "dat_person_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return dat_person;
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { master_education, master_educationId } from './master_education';
import type { master_prefix, master_prefixId } from './master_prefix';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface dat_applyAttributes {
  id?: string;
  position_id?: string[];
  prefix_id?: string;
  fullname_th: string;
  fullname_en: string;
  nick_name?: string;
  gender?: number;
  height?: number;
  weight?: number;
  address?: string;
  email?: string;
  facebook?: string;
  line?: string;
  phone_number?: string;
  education_id?: string;
  expected_salary?: number;
  work_experience?: number;
  last_position?: string;
  path_upload?: any;
  created_by: string;
  created_date: Date;
  update_by?: string;
  update_date?: Date;
}

export type dat_applyPk = "id";
export type dat_applyId = dat_apply[dat_applyPk];
export type dat_applyCreationAttributes = Optional<dat_applyAttributes, dat_applyPk>;

export class dat_apply extends Model<dat_applyAttributes, dat_applyCreationAttributes> implements dat_applyAttributes {
  id?: string;
  position_id?: string[];
  prefix_id?: string;
  fullname_th!: string;
  fullname_en!: string;
  nick_name?: string;
  gender?: number;
  height?: number;
  weight?: number;
  address?: string;
  email?: string;
  facebook?: string;
  line?: string;
  phone_number?: string;
  education_id?: string;
  expected_salary?: number;
  work_experience?: number;
  last_position?: string;
  path_upload?: any;
  created_by!: string;
  created_date!: Date;
  update_by?: string;
  update_date?: Date;

  // dat_apply belongsTo master_education via education_id
  education!: master_education;
  getEducation!: Sequelize.BelongsToGetAssociationMixin<master_education>;
  setEducation!: Sequelize.BelongsToSetAssociationMixin<master_education, master_educationId>;
  createEducation!: Sequelize.BelongsToCreateAssociationMixin<master_education>;
  // dat_apply belongsTo master_prefix via prefix_id
  prefix!: master_prefix;
  getPrefix!: Sequelize.BelongsToGetAssociationMixin<master_prefix>;
  setPrefix!: Sequelize.BelongsToSetAssociationMixin<master_prefix, master_prefixId>;
  createPrefix!: Sequelize.BelongsToCreateAssociationMixin<master_prefix>;
  // dat_apply belongsTo sysm_users via created_by
  created_by_sysm_user!: sysm_users;
  getCreated_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setCreated_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createCreated_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;
  // dat_apply belongsTo sysm_users via update_by
  update_by_sysm_user!: sysm_users;
  getUpdate_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUpdate_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUpdate_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dat_apply {
    dat_apply.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักสมัครงาน",
      primaryKey: true
    },
    position_id: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true,
      comment: "รหัสตารางตำแหน่งงาน"
    },
    prefix_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสตารางคำนำหน้าชื่อ",
      references: {
        model: 'master_prefix',
        key: 'id'
      }
    },
    fullname_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อ - สกุล ไทย"
    },
    fullname_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อ - สกุล ไทย"
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
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ส่วนสูง"
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "น้ำหนัก"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ที่อยู่"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "email"
    },
    facebook: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "facebook"
    },
    line: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "line"
    },
    phone_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เบอร์ติดต่อ"
    },
    education_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ระดับการศึกษา (รหัสตาราง master_education)",
      references: {
        model: 'master_education',
        key: 'id'
      }
    },
    expected_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "เงินเดือนที่คาดหวัง"
    },
    work_experience: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ประสบการทำงาน"
    },
    last_position: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ตำแหน่งล่าสุด"
    },
    path_upload: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "ตำแหน่งล่าสุด"
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
    tableName: 'dat_apply',
    schema: 'bestbuddy_data',
    timestamps: false,
    indexes: [
      {
        name: "dat_apply_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return dat_apply;
  }
}

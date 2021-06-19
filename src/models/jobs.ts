import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { defect_logs, defect_logsId } from './defect_logs';
import type { master_modules, master_modulesId } from './master_modules';

export interface jobsAttributes {
  id: string;
  code: string;
  job_name?: string;
  is_use?: boolean;
  created_date: Date;
  updated_date?: Date;
  password?: string;
}

export type jobsPk = "id";
export type jobsId = jobs[jobsPk];
export type jobsCreationAttributes = Optional<jobsAttributes, jobsPk>;

export class jobs extends Model<jobsAttributes, jobsCreationAttributes> implements jobsAttributes {
  id!: string;
  code!: string;
  job_name?: string;
  is_use?: boolean;
  created_date!: Date;
  updated_date?: Date;
  password?: string;

  // jobs hasMany defect_logs via job_id
  defect_logs!: defect_logs[];
  getDefect_logs!: Sequelize.HasManyGetAssociationsMixin<defect_logs>;
  setDefect_logs!: Sequelize.HasManySetAssociationsMixin<defect_logs, defect_logsId>;
  addDefect_log!: Sequelize.HasManyAddAssociationMixin<defect_logs, defect_logsId>;
  addDefect_logs!: Sequelize.HasManyAddAssociationsMixin<defect_logs, defect_logsId>;
  createDefect_log!: Sequelize.HasManyCreateAssociationMixin<defect_logs>;
  removeDefect_log!: Sequelize.HasManyRemoveAssociationMixin<defect_logs, defect_logsId>;
  removeDefect_logs!: Sequelize.HasManyRemoveAssociationsMixin<defect_logs, defect_logsId>;
  hasDefect_log!: Sequelize.HasManyHasAssociationMixin<defect_logs, defect_logsId>;
  hasDefect_logs!: Sequelize.HasManyHasAssociationsMixin<defect_logs, defect_logsId>;
  countDefect_logs!: Sequelize.HasManyCountAssociationsMixin;
  // jobs hasMany master_modules via job_id
  master_modules!: master_modules[];
  getMaster_modules!: Sequelize.HasManyGetAssociationsMixin<master_modules>;
  setMaster_modules!: Sequelize.HasManySetAssociationsMixin<master_modules, master_modulesId>;
  addMaster_module!: Sequelize.HasManyAddAssociationMixin<master_modules, master_modulesId>;
  addMaster_modules!: Sequelize.HasManyAddAssociationsMixin<master_modules, master_modulesId>;
  createMaster_module!: Sequelize.HasManyCreateAssociationMixin<master_modules>;
  removeMaster_module!: Sequelize.HasManyRemoveAssociationMixin<master_modules, master_modulesId>;
  removeMaster_modules!: Sequelize.HasManyRemoveAssociationsMixin<master_modules, master_modulesId>;
  hasMaster_module!: Sequelize.HasManyHasAssociationMixin<master_modules, master_modulesId>;
  hasMaster_modules!: Sequelize.HasManyHasAssociationsMixin<master_modules, master_modulesId>;
  countMaster_modules!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof jobs {
    jobs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "รหัสงาน"
    },
    job_name: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ชื่องาน"
    },
    is_use: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "สร้างข้อมูลเมื่อ"
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ปรับปรุงข้อมูลเมื่อ"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสผ่าน"
    }
  }, {
    sequelize,
    tableName: 'jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jobs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return jobs;
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { defect_logs, defect_logsId } from './defect_logs';
import type { jobs, jobsId } from './jobs';

export interface master_modulesAttributes {
  id: string;
  module_name: string;
  color_code?: string;
  job_id: string;
  sort?: number;
}

export type master_modulesPk = "id";
export type master_modulesId = master_modules[master_modulesPk];
export type master_modulesCreationAttributes = Optional<master_modulesAttributes, master_modulesPk>;

export class master_modules extends Model<master_modulesAttributes, master_modulesCreationAttributes> implements master_modulesAttributes {
  id!: string;
  module_name!: string;
  color_code?: string;
  job_id!: string;
  sort?: number;

  // master_modules belongsTo jobs via job_id
  job!: jobs;
  getJob!: Sequelize.BelongsToGetAssociationMixin<jobs>;
  setJob!: Sequelize.BelongsToSetAssociationMixin<jobs, jobsId>;
  createJob!: Sequelize.BelongsToCreateAssociationMixin<jobs>;
  // master_modules hasMany defect_logs via module_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof master_modules {
    master_modules.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    module_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ชื่อหัวข้อ"
    },
    color_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "สี"
    },
    job_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ไอดี ของ ตาราง jobs",
      references: {
        model: 'jobs',
        key: 'id'
      }
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'master_modules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "master_modules_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_modules;
  }
}

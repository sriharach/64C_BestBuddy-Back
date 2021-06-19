import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { jobs, jobsId } from './jobs';
import type { master_modules, master_modulesId } from './master_modules';
import type { master_severities, master_severitiesId } from './master_severities';
import type { master_status, master_statusId } from './master_status';
import type { users, usersId } from './users';

export interface defect_logsAttributes {
  id: string;
  log_code: string;
  test_case_code?: string;
  module_id: string;
  description: string;
  severity_id: string;
  status_id: string;
  reported_by: string;
  resolve_by?: string;
  job_id: string;
  remark?: string;
  created_date: Date;
  updated_date?: Date;
  upload?: any;
}

export type defect_logsPk = "id";
export type defect_logsId = defect_logs[defect_logsPk];
export type defect_logsCreationAttributes = Optional<defect_logsAttributes, defect_logsPk>;

export class defect_logs extends Model<defect_logsAttributes, defect_logsCreationAttributes> implements defect_logsAttributes {
  id!: string;
  log_code!: string;
  test_case_code?: string;
  module_id!: string;
  description!: string;
  severity_id!: string;
  status_id!: string;
  reported_by!: string;
  resolve_by?: string;
  job_id!: string;
  remark?: string;
  created_date!: Date;
  updated_date?: Date;
  upload?: any;

  // defect_logs belongsTo jobs via job_id
  job!: jobs;
  getJob!: Sequelize.BelongsToGetAssociationMixin<jobs>;
  setJob!: Sequelize.BelongsToSetAssociationMixin<jobs, jobsId>;
  createJob!: Sequelize.BelongsToCreateAssociationMixin<jobs>;
  // defect_logs belongsTo master_modules via module_id
  module!: master_modules;
  getModule!: Sequelize.BelongsToGetAssociationMixin<master_modules>;
  setModule!: Sequelize.BelongsToSetAssociationMixin<master_modules, master_modulesId>;
  createModule!: Sequelize.BelongsToCreateAssociationMixin<master_modules>;
  // defect_logs belongsTo master_severities via severity_id
  severity!: master_severities;
  getSeverity!: Sequelize.BelongsToGetAssociationMixin<master_severities>;
  setSeverity!: Sequelize.BelongsToSetAssociationMixin<master_severities, master_severitiesId>;
  createSeverity!: Sequelize.BelongsToCreateAssociationMixin<master_severities>;
  // defect_logs belongsTo master_status via status_id
  status!: master_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<master_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<master_status, master_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<master_status>;
  // defect_logs belongsTo users via reported_by
  reported_by_user!: users;
  getReported_by_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setReported_by_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createReported_by_user!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // defect_logs belongsTo users via resolve_by
  resolve_by_user!: users;
  getResolve_by_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setResolve_by_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createResolve_by_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof defect_logs {
    defect_logs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    log_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "รหัส log"
    },
    test_case_code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "รหัส test case"
    },
    module_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ไอดี ของ ตาราง master_modules",
      references: {
        model: 'master_modules',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "รายละเอียด"
    },
    severity_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ไอดี ของ ตาราง master_severities",
      references: {
        model: 'master_severities',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ไอดี ของ ตาราง master_status",
      references: {
        model: 'master_status',
        key: 'id'
      }
    },
    reported_by: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ไอดี ของ ตาราง users (คนที่แจ้งบัค)",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    resolve_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ไอดี ของ ตาราง users (คนที่แก้ไข)",
      references: {
        model: 'users',
        key: 'id'
      }
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
    remark: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "หมายเหตุ"
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
    upload: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Upload เอกสาร หรือ รูปภาพ"
    }
  }, {
    sequelize,
    tableName: 'defect_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "defect_logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return defect_logs;
  }
}

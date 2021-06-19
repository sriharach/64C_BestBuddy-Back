import type { Sequelize, Model } from "sequelize";
import { SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { defect_logs } from "./defect_logs";
import type { defect_logsAttributes, defect_logsCreationAttributes } from "./defect_logs";
import { jobs } from "./jobs";
import type { jobsAttributes, jobsCreationAttributes } from "./jobs";
import { master_modules } from "./master_modules";
import type { master_modulesAttributes, master_modulesCreationAttributes } from "./master_modules";
import { master_severities } from "./master_severities";
import type { master_severitiesAttributes, master_severitiesCreationAttributes } from "./master_severities";
import { master_status } from "./master_status";
import type { master_statusAttributes, master_statusCreationAttributes } from "./master_status";
import { users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  SequelizeMeta,
  defect_logs,
  jobs,
  master_modules,
  master_severities,
  master_status,
  users,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  defect_logsAttributes,
  defect_logsCreationAttributes,
  jobsAttributes,
  jobsCreationAttributes,
  master_modulesAttributes,
  master_modulesCreationAttributes,
  master_severitiesAttributes,
  master_severitiesCreationAttributes,
  master_statusAttributes,
  master_statusCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  SequelizeMeta.initModel(sequelize);
  defect_logs.initModel(sequelize);
  jobs.initModel(sequelize);
  master_modules.initModel(sequelize);
  master_severities.initModel(sequelize);
  master_status.initModel(sequelize);
  users.initModel(sequelize);

  defect_logs.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(defect_logs, { as: "defect_logs", foreignKey: "job_id"});
  master_modules.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(master_modules, { as: "master_modules", foreignKey: "job_id"});
  defect_logs.belongsTo(master_modules, { as: "module", foreignKey: "module_id"});
  master_modules.hasMany(defect_logs, { as: "defect_logs", foreignKey: "module_id"});
  defect_logs.belongsTo(master_severities, { as: "severity", foreignKey: "severity_id"});
  master_severities.hasMany(defect_logs, { as: "defect_logs", foreignKey: "severity_id"});
  defect_logs.belongsTo(master_status, { as: "status", foreignKey: "status_id"});
  master_status.hasMany(defect_logs, { as: "defect_logs", foreignKey: "status_id"});
  defect_logs.belongsTo(users, { as: "reported_by_user", foreignKey: "reported_by"});
  users.hasMany(defect_logs, { as: "defect_logs", foreignKey: "reported_by"});
  defect_logs.belongsTo(users, { as: "resolve_by_user", foreignKey: "resolve_by"});
  users.hasMany(defect_logs, { as: "resolve_by_defect_logs", foreignKey: "resolve_by"});

  return {
    SequelizeMeta: SequelizeMeta,
    defect_logs: defect_logs,
    jobs: jobs,
    master_modules: master_modules,
    master_severities: master_severities,
    master_status: master_status,
    users: users,
  };
}

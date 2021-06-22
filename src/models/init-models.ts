import type { Sequelize, Model } from "sequelize";
import { SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { dat_apply } from "./dat_apply";
import type { dat_applyAttributes, dat_applyCreationAttributes } from "./dat_apply";
import { dat_blog } from "./dat_blog";
import type { dat_blogAttributes, dat_blogCreationAttributes } from "./dat_blog";
import { dat_person } from "./dat_person";
import type { dat_personAttributes, dat_personCreationAttributes } from "./dat_person";
import { master_category_blog } from "./master_category_blog";
import type { master_category_blogAttributes, master_category_blogCreationAttributes } from "./master_category_blog";
import { master_education } from "./master_education";
import type { master_educationAttributes, master_educationCreationAttributes } from "./master_education";
import { master_position } from "./master_position";
import type { master_positionAttributes, master_positionCreationAttributes } from "./master_position";
import { master_prefix } from "./master_prefix";
import type { master_prefixAttributes, master_prefixCreationAttributes } from "./master_prefix";
import { sysm_roles } from "./sysm_roles";
import type { sysm_rolesAttributes, sysm_rolesCreationAttributes } from "./sysm_roles";
import { sysm_users } from "./sysm_users";
import type { sysm_usersAttributes, sysm_usersCreationAttributes } from "./sysm_users";

export {
  SequelizeMeta,
  dat_apply,
  dat_blog,
  dat_person,
  master_category_blog,
  master_education,
  master_position,
  master_prefix,
  sysm_roles,
  sysm_users,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  dat_applyAttributes,
  dat_applyCreationAttributes,
  dat_blogAttributes,
  dat_blogCreationAttributes,
  dat_personAttributes,
  dat_personCreationAttributes,
  master_category_blogAttributes,
  master_category_blogCreationAttributes,
  master_educationAttributes,
  master_educationCreationAttributes,
  master_positionAttributes,
  master_positionCreationAttributes,
  master_prefixAttributes,
  master_prefixCreationAttributes,
  sysm_rolesAttributes,
  sysm_rolesCreationAttributes,
  sysm_usersAttributes,
  sysm_usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  SequelizeMeta.initModel(sequelize);
  dat_apply.initModel(sequelize);
  dat_blog.initModel(sequelize);
  dat_person.initModel(sequelize);
  master_category_blog.initModel(sequelize);
  master_education.initModel(sequelize);
  master_position.initModel(sequelize);
  master_prefix.initModel(sequelize);
  sysm_roles.initModel(sequelize);
  sysm_users.initModel(sequelize);

  dat_blog.belongsTo(master_category_blog, { as: "category", foreignKey: "category_id"});
  master_category_blog.hasMany(dat_blog, { as: "dat_blogs", foreignKey: "category_id"});
  dat_apply.belongsTo(master_education, { as: "education", foreignKey: "education_id"});
  master_education.hasMany(dat_apply, { as: "dat_applies", foreignKey: "education_id"});
  dat_apply.belongsTo(master_prefix, { as: "prefix", foreignKey: "prefix_id"});
  master_prefix.hasMany(dat_apply, { as: "dat_applies", foreignKey: "prefix_id"});
  dat_person.belongsTo(master_prefix, { as: "prefix", foreignKey: "prefix_id"});
  master_prefix.hasMany(dat_person, { as: "dat_people", foreignKey: "prefix_id"});
  dat_apply.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(dat_apply, { as: "dat_applies", foreignKey: "created_by"});
  dat_apply.belongsTo(sysm_users, { as: "update_by_sysm_user", foreignKey: "update_by"});
  sysm_users.hasMany(dat_apply, { as: "update_by_dat_applies", foreignKey: "update_by"});
  dat_blog.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(dat_blog, { as: "dat_blogs", foreignKey: "created_by"});
  dat_blog.belongsTo(sysm_users, { as: "update_by_sysm_user", foreignKey: "update_by"});
  sysm_users.hasMany(dat_blog, { as: "update_by_dat_blogs", foreignKey: "update_by"});
  dat_person.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(dat_person, { as: "dat_people", foreignKey: "user_id"});
  master_position.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(master_position, { as: "master_positions", foreignKey: "created_by"});
  master_position.belongsTo(sysm_users, { as: "update_by_sysm_user", foreignKey: "update_by"});
  sysm_users.hasMany(master_position, { as: "update_by_master_positions", foreignKey: "update_by"});
  sysm_users.belongsTo(sysm_roles, { as: "role", foreignKey: "roles_id"});
  sysm_roles.hasMany(sysm_users, { as: "sysm_users", foreignKey: "roles_id"});
  sysm_users.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(sysm_users, { as: "sysm_users", foreignKey: "created_by"});
  sysm_users.belongsTo(sysm_users, { as: "update_by_sysm_user", foreignKey: "update_by"});
  sysm_users.hasMany(sysm_users, { as: "update_by_sysm_users", foreignKey: "update_by"});

  return {
    SequelizeMeta: SequelizeMeta,
    dat_apply: dat_apply,
    dat_blog: dat_blog,
    dat_person: dat_person,
    master_category_blog: master_category_blog,
    master_education: master_education,
    master_position: master_position,
    master_prefix: master_prefix,
    sysm_roles: sysm_roles,
    sysm_users: sysm_users,
  };
}

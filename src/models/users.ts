import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { defect_logs, defect_logsId } from './defect_logs';

export interface usersAttributes {
  id: string;
  nickname?: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersCreationAttributes = Optional<usersAttributes, usersPk>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: string;
  nickname?: string;

  // users hasMany defect_logs via reported_by
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
  // users hasMany defect_logs via resolve_by
  resolve_by_defect_logs!: defect_logs[];
  getResolve_by_defect_logs!: Sequelize.HasManyGetAssociationsMixin<defect_logs>;
  setResolve_by_defect_logs!: Sequelize.HasManySetAssociationsMixin<defect_logs, defect_logsId>;
  addResolve_by_defect_log!: Sequelize.HasManyAddAssociationMixin<defect_logs, defect_logsId>;
  addResolve_by_defect_logs!: Sequelize.HasManyAddAssociationsMixin<defect_logs, defect_logsId>;
  createResolve_by_defect_log!: Sequelize.HasManyCreateAssociationMixin<defect_logs>;
  removeResolve_by_defect_log!: Sequelize.HasManyRemoveAssociationMixin<defect_logs, defect_logsId>;
  removeResolve_by_defect_logs!: Sequelize.HasManyRemoveAssociationsMixin<defect_logs, defect_logsId>;
  hasResolve_by_defect_log!: Sequelize.HasManyHasAssociationMixin<defect_logs, defect_logsId>;
  hasResolve_by_defect_logs!: Sequelize.HasManyHasAssociationsMixin<defect_logs, defect_logsId>;
  countResolve_by_defect_logs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ชื่อเล่น"
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return users;
  }
}

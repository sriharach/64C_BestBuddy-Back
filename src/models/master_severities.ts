import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { defect_logs, defect_logsId } from './defect_logs';

export interface master_severitiesAttributes {
  id: string;
  severity_name: string;
  color_code?: string;
  effect: string;
  description?: string;
  sort?: number;
}

export type master_severitiesPk = "id";
export type master_severitiesId = master_severities[master_severitiesPk];
export type master_severitiesCreationAttributes = Optional<master_severitiesAttributes, master_severitiesPk>;

export class master_severities extends Model<master_severitiesAttributes, master_severitiesCreationAttributes> implements master_severitiesAttributes {
  id!: string;
  severity_name!: string;
  color_code?: string;
  effect!: string;
  description?: string;
  sort?: number;

  // master_severities hasMany defect_logs via severity_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof master_severities {
    master_severities.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    severity_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ความรุนแรง"
    },
    color_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "สี"
    },
    effect: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ผลกระทบ"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียด"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'master_severities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "master_severities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_severities;
  }
}

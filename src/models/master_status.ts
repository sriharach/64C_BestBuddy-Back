import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { defect_logs, defect_logsId } from './defect_logs';

export interface master_statusAttributes {
  id: string;
  status_name: string;
  color_code?: string;
  description?: string;
  sort?: number;
  is_open_bug?: boolean;
}

export type master_statusPk = "id";
export type master_statusId = master_status[master_statusPk];
export type master_statusCreationAttributes = Optional<master_statusAttributes, master_statusPk>;

export class master_status extends Model<master_statusAttributes, master_statusCreationAttributes> implements master_statusAttributes {
  id!: string;
  status_name!: string;
  color_code?: string;
  description?: string;
  sort?: number;
  is_open_bug?: boolean;

  // master_status hasMany defect_logs via status_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof master_status {
    master_status.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "สถานะ"
    },
    color_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "สี"
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
    },
    is_open_bug: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "true คือ บัค"
    }
  }, {
    sequelize,
    tableName: 'master_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "master_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_status;
  }
}

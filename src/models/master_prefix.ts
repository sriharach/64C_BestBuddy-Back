import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface master_prefixAttributes {
  id?: string;
  prefix_name: string;
  sort?: number;
}

export type master_prefixPk = "id";
export type master_prefixId = master_prefix[master_prefixPk];
export type master_prefixCreationAttributes = Optional<master_prefixAttributes, master_prefixPk>;

export class master_prefix extends Model<master_prefixAttributes, master_prefixCreationAttributes> implements master_prefixAttributes {
  id?: string;
  prefix_name!: string;
  sort?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof master_prefix {
    master_prefix.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักคำนำหน้าชื่อ",
      primaryKey: true
    },
    prefix_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "คำนำหน้า"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'master_prefix',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "master_prefix_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_prefix;
  }
}

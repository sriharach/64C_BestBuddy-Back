import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface master_educationAttributes {
  id?: string;
  education_name: string;
  sort?: number;
}

export type master_educationPk = "id";
export type master_educationId = master_education[master_educationPk];
export type master_educationCreationAttributes = Optional<master_educationAttributes, master_educationPk>;

export class master_education extends Model<master_educationAttributes, master_educationCreationAttributes> implements master_educationAttributes {
  id?: string;
  education_name!: string;
  sort?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof master_education {
    master_education.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักระดับการศึกษา",
      primaryKey: true
    },
    education_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ชื่อ ระดับการศึกษา"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'master_education',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "master_education_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_education;
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface master_category_blogAttributes {
  id?: string;
  category_name: string;
  sort?: number;
}

export type master_category_blogPk = "id";
export type master_category_blogId = master_category_blog[master_category_blogPk];
export type master_category_blogCreationAttributes = Optional<master_category_blogAttributes, master_category_blogPk>;

export class master_category_blog extends Model<master_category_blogAttributes, master_category_blogCreationAttributes> implements master_category_blogAttributes {
  id?: string;
  category_name!: string;
  sort?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof master_category_blog {
    master_category_blog.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักหมวดหมู่ประกัน",
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ชื่อ ประเภท หมวด"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'master_category_blog',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "master_category_blog_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return master_category_blog;
  }
}

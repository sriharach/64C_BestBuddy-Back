import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { master_category_blog, master_category_blogId } from './master_category_blog';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface dat_blogAttributes {
  id?: string;
  category_id: string;
  blog_title: string;
  blog_detail?: string;
  path_img?: any;
  blog_count?: number;
  status: number;
  isuse: number;
  created_by: string;
  created_date: Date;
  update_by?: string;
  update_date?: Date;
}

export type dat_blogPk = "id";
export type dat_blogId = dat_blog[dat_blogPk];
export type dat_blogCreationAttributes = Optional<dat_blogAttributes, dat_blogPk>;

export class dat_blog extends Model<dat_blogAttributes, dat_blogCreationAttributes> implements dat_blogAttributes {
  id?: string;
  category_id!: string;
  blog_title!: string;
  blog_detail?: string;
  path_img?: any;
  blog_count?: number;
  status!: number;
  isuse!: number;
  created_by!: string;
  created_date!: Date;
  update_by?: string;
  update_date?: Date;

  // dat_blog belongsTo master_category_blog via category_id
  category!: master_category_blog;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<master_category_blog>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<master_category_blog, master_category_blogId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<master_category_blog>;
  // dat_blog belongsTo sysm_users via created_by
  created_by_sysm_user!: sysm_users;
  getCreated_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setCreated_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createCreated_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;
  // dat_blog belongsTo sysm_users via update_by
  update_by_sysm_user!: sysm_users;
  getUpdate_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUpdate_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUpdate_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dat_blog {
    dat_blog.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักหน้า blog",
      primaryKey: true
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัส ตาราง ประเภท หมวด ของ blog",
      references: {
        model: 'master_category_blog',
        key: 'id'
      }
    },
    blog_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "หัวข้อ"
    },
    blog_detail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียด"
    },
    path_img: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "ที่จัดเก็บรูป"
    },
    blog_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "จำนวนคนเข้าชม"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "สถานะ : 1 = บทความ , 2 = กิจกรรมบริษัท"
    },
    isuse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "สถานะ : 0 = ยกเลิก , 1 = ใช้งาน"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "สร้างข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "สร้างข้อมูลวันที่"
    },
    update_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "แก้ไขข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "แก้ไขข้อมูลวันที่"
    }
  }, {
    sequelize,
    tableName: 'dat_blog',
    schema: 'bestbuddy_data',
    timestamps: false,
    indexes: [
      {
        name: "dat_blog_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return dat_blog;
  }
}

import { initModels, dat_blog } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString } from '../util';
import { v4 as uuid4 } from 'uuid';
import { EditStatusBlogInterface, ManageBlogInterface } from "../interface/blogInterface";
import { Request } from "express";

initModels(sequelize);


export const updateBlogService = async (model: ManageBlogInterface, transaction: any = undefined) => {
    await dat_blog.update({
        category_id: model.category_id,
        blog_title: model.blog_title,
        blog_detail: model.blog_detail,
        path_img: model.path_img,
        update_by: model.user_id,
        update_date: new Date()
    }, { where: { id: model.id, }, transaction });
    return model.id
}

export const createBlogService = async (model: ManageBlogInterface, transaction: any = undefined) => {
    const id = uuid4();
    await dat_blog.create({
        id,
        category_id: model.category_id,
        blog_title: model.blog_title,
        blog_detail: model.blog_detail,
        path_img: model.path_img,
        blog_count: 0,
        status: model.status,
        isuse: 1,
        created_by: model.user_id,
        created_date: new Date()
    }, { transaction })
    return id;
}

export const getAllDataBlogService = async (model: any, req: Request) => {
    let sql = `SELECT
    a.id , a.category_id , a.blog_title , a.blog_detail , a.path_img , a.blog_count , a.created_date , a.status
    , (b.first_name_th || ' ' || b.last_name_th) as created_name
    , (SELECT category_name FROM master.master_category_blog WHERE id = a.category_id) as category_name
    FROM bestbuddy_data.dat_blog as a
    INNER JOIN bestbuddy_data.dat_person as b ON a.created_by = b.user_id WHERE a.status = ${model.status} AND a.isuse = 1 `
    let sqlCount = `SELECT count(a.id) FROM bestbuddy_data.dat_blog as a WHERE a.status = ${model.status} AND a.isuse = 1 `

    if (model.category) {
        sql += ` AND a.category_id = '${model.category}' `;
        sqlCount += ` AND a.category_id = '${model.category}' `;
    }

    sql += ` ORDER BY a.blog_count DESC , a.update_date DESC ,a.created_date DESC LIMIT ${req.query.limit}  OFFSET ${req.skip} `;
    const res_count: any = await sequelizeString(sqlCount)
    const count = (res_count.length > 0) ? Number(res_count[0].count) : 0;
    return {
        data: await sequelizeString(sql),
        count,
    }

}

export const getByIdBlogService = async (id: string) => {
    return await dat_blog.findOne({ where: { id } })
}

export const destroyBlogService = async (id: string) => {
    return await dat_blog.destroy({ where: { id } });
}

export const editStatusBlogService = async (model: EditStatusBlogInterface, transaction: any = undefined) => {
    await dat_blog.update({
        isuse: model.status,
        update_by: model.user_id,
        update_date: new Date()
    }, { where: { id: model.id, }, transaction });
    return model.id
}

export default {
    createBlogService,
    updateBlogService,
    getAllDataBlogService,
    getByIdBlogService,
    destroyBlogService,
}
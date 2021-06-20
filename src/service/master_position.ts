import { initModels, master_position } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { v4 as uuid4 } from 'uuid';

initModels(sequelize);

export const getAllpositionService = async (model: any) => {

    var sql = `SELECT * FROM master.master_position WHERE id is not null`

    if (model.position_name != null && model.position_name != "") {
        sql += ` AND position_name LIKE '%${model.position_name}%'`
    }

    return await sequelizeString(sql)


}

export const addPositionService = async (model: any) => {
    await master_position.create({
        id: uuid4(),
        position_name: model.position_name,
        position_detail: model.position_detail,
        detail: model.detail,
        responsibility: model.responsibility,
        required_properties: model.required_properties,
        isuse: 1, //สถานะ : 0 = ไม่ใช้งาน , 1 = เปิดรับสมัคร , 2 = ปิดรับสมัคร
        created_by: model.user_id,
        created_date: new Date()
    })
    return uuid4()
}

export const updatePositionService = async (model: any) => {
    await master_position.update({
        id: uuid4(),
        position_name: model.position_name,
        position_detail: model.position_detail,
        detail: model.detail,
        responsibility: model.responsibility,
        required_properties: model.required_properties,
        isuse: model.isuse, //สถานะ : 0 = ไม่ใช้งาน , 1 = เปิดรับสมัคร , 2 = ปิดรับสมัคร
        created_by: model.user_id,
        created_date: new Date()
    }, { where: { id: model.id } })
    return true
}

export const GetByIdPositionService = async (id: any) => {
    return await master_position.findByPk(id)
}

export default {
    addPositionService,
    updatePositionService,
    GetByIdPositionService
}
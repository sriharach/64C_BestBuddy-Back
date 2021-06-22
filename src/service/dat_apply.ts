import { initModels, dat_apply } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { v4 as uuid4 } from 'uuid';

initModels(sequelize);


export const addManageApplyService = async (model: any) => {
    const id = uuid4()

    await dat_apply.create({
        id,
        position_id: model.position_id,
        prefix_id: model.prefix_id,
        fullname_th: model.fullname_th,
        fullname_en: model.fullname_en,
        nick_name: model.nick_name,
        gender: model.gender,
        height: model.height,
        weight: model.weight,
        address: model.address,
        email: model.email,
        facebook: model.facebook,
        line: model.line,
        phone_number: model.phone_number,
        education_id: model.education_id,
        expected_salary: model.expected_salary,
        work_experience: model.work_experience,
        last_position: model.last_position,
        path_upload: model.path_upload,
        created_by: model.user_id,
        created_date: new Date()
    })

    return id
}

export const updateManageApplyService = async (model: any) => {
    await dat_apply.update({
        position_id: model.position_id,
        prefix_id: model.prefix_id,
        fullname_th: model.fullname_th,
        fullname_en: model.fullname_en,
        nick_name: model.nick_name,
        gender: model.gender,
        height: model.height,
        weight: model.weight,
        address: model.address,
        email: model.email,
        facebook: model.facebook,
        line: model.line,
        phone_number: model.phone_number,
        education_id: model.education_id,
        expected_salary: model.expected_salary,
        work_experience: model.work_experience,
        last_position: model.last_position,
        path_upload: model.path_upload,
        update_by: model.user_id,
        update_date: new Date()
    }, { where: { id: model.id } })

    return model.id 
}

export default {
    addManageApplyService,
    updateManageApplyService
}
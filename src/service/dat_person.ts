import { initModels, dat_person } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const createDatPersonService = async (model: UsersInterface, transaction: any = "null") => {
    const id = uuidv4();
    await dat_person.create({
        id,
        user_id: model.user_id ?? id,
        prefix_id: model.prefix_id,
        first_name_th: model.first_name_th,
        last_name_th: model.last_name_th,
        first_name_en: model.first_name_en,
        last_name_en: model.last_name_en,
        nick_name: model.nick_name,
        gender: model.gender,
        birthday: model.birthday,
        id_card: model.id_card,
        passport_number: model.passport_number,
        insurance_code: model.insurance_code,
    }, { transaction })
    return id
};

export default {
    createDatPersonService
}
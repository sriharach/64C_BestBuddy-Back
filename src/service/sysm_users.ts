import { initModels, sysm_users } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const filterUsernameUsersService = async (username: string) => {
    return await sequelizeStringFindOne(`
    SELECT a.* , b.first_name_th ,b.last_name_th , b.first_name_en, b.last_name_en ,
    (SELECT roles_name FROM system.sysm_roles WHERE id = a.roles_id) AS roles_name
    FROM system.sysm_users as a
    INNER JOIN bestbuddy_data.dat_person as b ON b.user_id = a.id
    WHERE UPPER(a.username)  = UPPER($1)
    `, [username]);
};

export const registerService = async (model: UsersInterface, transaction: any = undefined) => {
    const id = uuidv4();
    await sysm_users.create({
        id,
        username: model.username,
        password: model.password,
        email: model.email,
        roles_id: "acee244f-a2db-47e7-89cc-3f63cb8e5731",
        isuse: 1,
        created_by: id,
        created_date: new Date(),
    }, { transaction })
    return id
};

export default {
    filterUsernameUsersService,
    registerService
}
import { initModels, master_prefix } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const GetmasterPrefixService = () => {
    return master_prefix.findAll({
        order:[
            ['sort', 'asc']
        ]
    })
}

export default {
    GetmasterPrefixService
}


import { Request, Response, NextFunction } from "express";
import config from '../config'
import { sequelize } from '../models'
import { initModels, jobs } from "../models/init-models";
import { sequelizeString, sequelizeStringFindOne, result } from '../util';

// import models into sequelize instance
initModels(sequelize);

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // const error: any = new Error("Error");
        // error.statusCode = config.STATUS_CODE_ERROR;
        // throw error;

        /* Query Model */
        const items = await jobs.findAll()

        /* Query String */
        const items2 = await sequelizeString("SELECT * FROM jobs")
        const items3 = await sequelizeStringFindOne("SELECT * FROM jobs where id = '00a95e91-7d6e-418e-b619-e1712721a04b' ")
        const items4 = await sequelizeStringFindOne("SELECT * FROM jobs where id = $1", ["36893837-d8c3-4c3a-a9ae-96d9ce903ecc"])

        const _model = {
            items,
            items2,
            items3,
            items4,
        }

        result(res, _model)

    } catch (error) {
        next(error);
    }
};

export default {
    login
}
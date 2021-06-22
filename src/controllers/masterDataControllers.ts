import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { checkPassword, result } from '../util';
import { GetmasterPrefixService } from '../service/master_prefix';

/** เรียกข้อมูลคำนำหน้าชื่อ */
export const GetmasterPrefix = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetmasterPrefixService())

    } catch (error) {
        next(error);
    }
}

export default {
    GetmasterPrefix
}
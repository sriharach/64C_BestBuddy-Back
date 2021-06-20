import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { checkPassword, result, decodeToken } from '../util';
import { addManageApplyService, updateManageApplyService } from '../service/dat_apply';

/** เรียกข้อมูลคำนำหน้าชื่อ */
export const ManageApply = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: any = await decodeToken(req.headers['authorization'])
        const model: any = req.body;
        model.user_id = token.user_id;

        if (model.id) {
            result(res, await updateManageApplyService(model));
        } else {
            result(res, await addManageApplyService(model));
        }

    } catch (error) {
        next(error);
    }
}

export default {
    ManageApply
}
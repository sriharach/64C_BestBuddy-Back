import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { result, decodeToken } from '../util';
import { addPositionService, updatePositionService, getAllpositionService, GetByIdPositionService, DelDataPositionService } from '../service/master_position';
import { positionInterface } from '../interface/jobPositionInterface'


/** เรียกข้อมูลตำแหน่งงานทั้งหมด */
export const GetAllposition = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const decode: any = await decodeToken(req.headers['authorization']);
        const model: any = req.body;

        result(res, await getAllpositionService(model))
    } catch (error) {
        next(error);
    }
}

/** เพิ่มแก้ไข ตำแหน่งงาน */
export const ManagePosition = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization']);
        const model: any = req.body;
        model.user_id = decode.user_id;

        if (model.id) {
            if(model.isuse == 0) throw new Error("ส่ง 0 ทำไมห้ามส่ง");
            result(res, await updatePositionService(model));
        } else {
            result(res, await addPositionService(model));
        }

    } catch (error) {
        next(error);
    }

}

/** เรียกข้อมูลด้วย id */
export const GetByIdPosition = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const decode: any = await decodeToken(req.headers['authorization']);
        const { id }: any = req.params

        result(res, await GetByIdPositionService(id));

    } catch (error) {
        next(error);
    }

}

/** ลบข้อมูล */
export const DelDataPosition = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization']);
        const model: positionInterface = req.body
        model.user_id = decode.user_id

        result(res, await DelDataPositionService(model.id, model.user_id))
    } catch (error) {
        next(error);
    }
    

}

export default {
    ManagePosition,
    GetAllposition,
    GetByIdPosition,
    DelDataPosition,

}
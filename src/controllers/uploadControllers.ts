import { Request, Response, NextFunction } from "express";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { result } from '../util';
import config from "../config";
import { Upload, UploadFile } from '../interface/uploadInterface';

export const uploads = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fileupload: any = req.files;
        const { Path = "all", Length = 1, Name, SetType }: Upload = req.query;
        const projectPath = path.resolve(`./${config.NODE_ENV === "development" ? "src" : ""}`);
        const uploadPath = `${projectPath}/public/uploads/${Path}/`;

        const File: any[] = [];
        for (let x = 0; x < Number(Length); x++) {
            File.push(fileupload[`file${x}`])
        }

        //เช็ค path ว่ามีไหม ถ้าไม่มีจะสร้างขึ้นมา
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }

        const UploadFile: UploadFile[] = [];

        let e;
        for (let i = 0; i < File.length; i++) {
            e = File[i];

            const type = SetType ? `.${SetType}` : `.${(e.name.substring(e.name.lastIndexOf(".") + 1).toLowerCase())}`;
            const name = Name ? Name + type : uuidv4() + type;

            const model: UploadFile = {
                location: `${config.SERVICE_HOST}/uploads/${Path}/${name}`,
                path: `/uploads/${Path}/${name}`,
                nameOld: e.name,
                nameNew: name,
                type,
            };


            UploadFile.push(model)
            e.mv(uploadPath + name, (err: any) => {
                if (err) {
                    const error: any = new Error(err);
                    error.statusCode = config.STATUS_CODE_ERROR;
                    throw error;
                }
            });

        }


        result(res, UploadFile)
    } catch (error) {
        next(error);
    }
};

export default {
    uploads
}
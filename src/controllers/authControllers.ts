import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { checkPassword, result } from '../util';
import { LoginInterface } from '../interface/loginInterface'
import { filterUsernameUsersService } from "../service/sysm_users";
import jwt from 'jsonwebtoken'

let refreshTokens: any = []

export const loginControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { username, password }: LoginInterface = req.body

        const _res: any = await filterUsernameUsersService(username)

        if (!_res) {
            const error: any = new Error(messages.errorUserNot);
            error.statusCode = config.STATUS_CODE_ERROR;
            throw error;
        }

        const passwordecrypt = await checkPassword(password, _res.password); //เช็ค password ตรงไหม

        if (!passwordecrypt) {
            const error: any = new Error(messages.errorPasswordUser);
            error.statusCode = config.STATUS_CODE_ERROR;
            throw error;
        }
        const model = {
            user_id: _res.id,
            username: _res.username,
            roles_id: _res.roles_id,
            roles_name: _res.roles_name,
            first_name_th: _res.first_name_th,
            last_name_th: _res.last_name_th,
            first_name_en: _res.first_name_en,
            last_name_en: _res.last_name_en,
            nick_name: _res.nick_name,
        }

        //สร้าง token
        const token = await generateAccessToken(model)
        const refreshToken = await jwt.sign(model, config.JWT_SECRET_REFRESH ?? "");
        refreshTokens.push(refreshToken)
        result(res, {
            token,
            refreshToken
        })

    } catch (error) {
        next(error);
    }
};

export const refreshTokenControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.body
        if (!token) res.sendStatus(401)
        if (!refreshTokens.includes(token)) res.sendStatus(403)
        jwt.verify(token, config.JWT_SECRET_REFRESH ?? "", async (err: any, _res: any) => {
            if (err) res.sendStatus(403)
            const _model = {
                user_id: _res.id,
                username: _res.username,
                roles_id: _res.roles_id,
                roles_name: _res.roles_name,
                first_name_th: _res.first_name_th,
                last_name_th: _res.last_name_th,
                first_name_en: _res.first_name_en,
                last_name_en: _res.last_name_en,
                nick_name: _res.nick_name,
            }
            const token = await generateAccessToken(_model)
            result(res, token)
        })
    } catch (error) {
        next(error);
    }
};
export const demoControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        result(res, null)
    } catch (error) {
        next(error);
    }
};


const generateAccessToken = async (model: any) => {
    return await jwt.sign(model, config.JWT_SECRET || "", {
        expiresIn: "30m"
    });
}

export default {
    loginControllers,
    refreshTokenControllers
}
import { Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import config from '../config'

const authenticateToken = (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1]
    if (!token) res.sendStatus(401)
    jwt.verify(token, config.JWT_SECRET ?? "", async (err: any, model: any) => {
        if (err) res.sendStatus(403)
        req.model = model
        next()
    })

}

export default authenticateToken
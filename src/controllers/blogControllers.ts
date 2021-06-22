import paginate from 'express-paginate';
import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { result, decodeToken } from '../util';
import { ManageBlogInterface } from "../interface/blogInterface";
import { createBlogService, destroyBlogService, editStatusBlogService, getAllDataBlogService, getByIdBlogService, updateBlogService } from "../service/blog";

/** เพิ่มแก้ไข */
export const manageBlogControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization']);
        const model: ManageBlogInterface = req.body;
        model.user_id = decode.user_id;

        if (model.id) {
            await updateBlogService(model)
        } else {
            model.id = await createBlogService(model)
        }

        result(res, model.id, 201)
    } catch (error) {
        next(error);
    }
}

export const getAllDataBlogControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { status = 1, category } = req.query;
        const limit: any = req.query.limit
        const page: any = req.query.page

        const _res = await getAllDataBlogService({ status, category }, req)
        const itemCount = _res.count;
        const pageCount = Math.ceil(itemCount / limit);

        result(res, {
            result: _res.data,
            pageCount,
            itemCount,
            pages: paginate.getArrayPages(req)(pageCount, pageCount, page),
        })
    } catch (error) {
        next(error);
    }
}

export const getByIdBlogControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        result(res, await getByIdBlogService(id))
    } catch (error) {
        next(error);
    }
}

export const delBlogControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        await destroyBlogService(id)
        result(res, true)
    } catch (error) {
        next(error);
    }
}

export const editStatusControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization']);
        const id: string = req.params.id;
        const status: number = Number(req.params.status);
        const user_id = decode.user_id;

        await editStatusBlogService({ id, status, user_id })
        result(res, true)
    } catch (error) {
        next(error);
    }
}

export default {
    manageBlogControllers,
    getAllDataBlogControllers,
    getByIdBlogControllers,
    delBlogControllers,
    editStatusControllers,
}
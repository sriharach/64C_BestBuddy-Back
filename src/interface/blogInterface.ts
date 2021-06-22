import { UploadFile } from "./uploadInterface";

export interface ManageBlogInterface {
    id?: string,
    category_id?: string,
    user_id: string,
    blog_title: string,
    blog_detail: string,
    path_img?: UploadFile | null | undefined,
    status: number,
}
export interface EditStatusBlogInterface {
    id: string,
    status: number,
    user_id: string,
}


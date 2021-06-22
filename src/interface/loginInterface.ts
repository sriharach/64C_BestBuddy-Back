export interface LoginInterface {
    username: string,
    password: string,
}
export interface UsersInterface {
    id?: string,
    user_id?: string,
    username: string,
    password: string,
    email: string,
    roles_id?: string,
    isuse?: number,
    created_by?: string
    created_date?: Date | string
    update_by?: string
    update_date?: Date | string
    prefix_id?: string,
    first_name_th?: string,
    last_name_th?: string,
    first_name_en?: string,
    last_name_en?: string,
    nick_name?: string,
    gender?: number
    birthday: string
    id_card?: string
    passport_number?: string
    insurance_code?: string
}

import { TUser } from "@/features/user"
/**
 *  Kiểu dữ liệu của action trong reducer của userlist
 * @description: Liệt kê các hành động có thể truyền vào reducer
 * 
 */
type UserListActionType = { type: "initData", payload: { users: TUser[], total: number, loading: boolean, error: boolean } }
    | { type: "setStatus", payload: { loading: boolean, error: boolean } }
    | { type: "goToPage", payload: number }
    | { type: "setLimit", payload: number }
    | { type: "setFilterStatus", payload: boolean }
    | { type: "search", payload: string }
    | { type: "reset" }
    | { type: "sort", payload: { type: "asc" | "desc", key: keyof TUser } }
export default UserListActionType
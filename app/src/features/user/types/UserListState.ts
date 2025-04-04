import { TUser } from "@/features/user"
interface Filter {
    active: boolean[]
}

interface UserListState {
    users: TUser[],
    result: TUser[],
    total: number,
    search: string,
    sort: "asc" | "desc",
    filter: Filter,
    page: number,
    numberOfPage : number,
    limit: number,
    loading: boolean,
    error: boolean,
}
export default UserListState
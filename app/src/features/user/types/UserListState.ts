import { TUser } from "@/features/user"
interface Filter {
    active: boolean[]
}
/**
 * @description kiểu dữ liệu của state reducer, quản lí danh sách người dùng
 * @property {TUser[]} users: danh sách người dùng lấy về từ API
 * @property {TUser[]} result: danh sách người dùng đã được lọc và phân trang (sẽ hiển thị cái này lên UI)
 * @property {number} total: tổng số người dùng trong danh sách (đã trải qua lọc)
 * @property {string} search: từ khóa tìm kiếm
 * @property {"asc" | "desc"} sort: kiểu sắp xếp (tăng dần hoặc giảm dần)
 * @property {Filter} filter: dữ liệu để lọc
 * @property {number} page: trang hiện tại
 * @property {number} numberOfPage: tổng số trang (sẽ hiển thị lên UI)
 * @property {number} limit: số lượng người dùng trên 1 trang
 * @property {boolean} loading: trạng thái loading, trả về từ react-query
 * @property {boolean} error: trạng thái lỗi, , trả về từ react-query
 */
interface UserListState {
    users: TUser[],
    result: TUser[],
    total: number,
    search: string,
    sort: { type: "asc" | "desc", key: keyof TUser },
    filter: Filter,
    page: number,
    numberOfPage: number,
    limit: number,
    loading: boolean,
    error: boolean,
}
export default UserListState
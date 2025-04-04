/**
 * @description kiểu dữ liệu mô tả người dùng
 * @property {string} id: id của người dùng
 * @property {string} name: tên
 * @property {number} balance: số dư
 * @property {string} email: email
 * @property {Date} registerAt: ngày đăng ký
 * @property {boolean} active: trạng thái
 */
interface TUser {
    id: string
    name: string
    balance: number
    email: string
    registerAt: Date
    active: boolean
}
export default TUser
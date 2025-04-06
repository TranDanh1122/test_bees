import React from "react"

//Thực tế sẽ splitig kỹ hơn với react-router, ở đây chỉ có 1 page nên xử lý tạm
export type { default as TUser } from "./types/TUser"
export { default as UserList } from "./views/UserList"
export { default as UserListAction } from "./views/UserListAction"
export { default as Search } from "./components/Search"
export { default as ViewMode } from "./components/ViewMode"
export { default as Filter } from "./components/Filter"
export type { default as UserListState } from "./types/UserListState"
export type { default as UserListActionType } from "./types/UserListActionType"
export { default as useUserList } from "./hooks/useUserList"
export { useGetUserQuery } from "./queries/useUserQuery"
export { default as UserListContextProvider } from "./context/UserListContext"
export { UserListContext } from "./context/UserListContext"
export { ViewModeContext } from "./context/ViewModeContext"
export { default as ViewModeContextProvider } from "./context/ViewModeContext"
export { useUserListAction } from "./hooks/useUserListAction"
/**
 * Tại sao splitting chỗ này?
 * Thông thường, người dùng hiếm khi đổi viewmode (hoặc ít nhất ứng viên khi dùng ứng dụng có chế độ này thường như thế)
 * View ban đầu cũng không cần biết viewmode khác thế nào
 * Không thể bắt họ load các component không bao giờ dùng đến được (của viewmode khác)
 */

// ----------- start: table mode -----------
export const UserTable = React.lazy(() => import("./components/UserTable"))
export const RegisterDate = React.lazy(() => import("./components/RegisterDate"))
export const Paginate = React.lazy(() => import("./components/Paginate"))
export const RowPerPage = React.lazy(() => import("./components/RowPerPage"))
export const UserListFooter = React.lazy(() => import("./views/UseListFooter"))
export const UserTableItem = React.lazy(() => import("./components/UserTableItem"))


// ----------- end: table mode -----------


// ----------- start: List mode -----------

export const UserInfintyList = React.lazy(() => import("./components/UserInfintyList"))
export const UserListItem = React.lazy(() => import("./components/UserListItem"))

// ----------- end: List mode -----------

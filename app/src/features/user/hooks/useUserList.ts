import React from "react"
import { UserListState, UserListActionType, TUser, useGetUserQuery } from "@/features/user"
import { filter } from "@/lib/filter"
import { toast } from "sonner"

/**
 reducer này sẽ nhận vào 1 state và 1 action, sau đó sẽ thực hiện hành động tương ứng với action.type
 * @param state dữ liệu hiện tại của reducer
 * @param action hành động đầu vào reducer
 * @returns 1 state mới sau khi đã thực hiện hành động tương ứng
 */
const reducer = (state: UserListState, action: UserListActionType) => {
    switch (action.type) {
        case "initData": {
            if (state.users.every(el => action.payload.users.some(item => el.id == item.id)) && state.total == action.payload.total) return state
            const { result, numberOfPage, total } = filter<TUser>(
                action.payload.users,
                state.page,
                state.limit,
                state.search,
                state.sort,
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, result: result, users: action.payload.users, total: total, numberOfPage: numberOfPage, loading: action.payload.loading, error: action.payload.error, listResult: [...result] }
        }
        case "setStatus": {
            if (state.loading == action.payload.loading && state.error == action.payload.error) return state
            return { ...state, loading: action.payload.loading, error: action.payload.error }
        }

        case "setLimit": {
            if (state.limit == action.payload) return state
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                1,
                action.payload,
                state.search,
                state.sort,
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, result: result, total: total, numberOfPage: numberOfPage, limit: action.payload, page: 1 } //chỗ này mặc định trả về page 1 là dễ nhất
        }
        case "setFilterStatus": {
            let newStatusFilter = [...state.filter.active]

            if (state.filter.active.some(el => el == action.payload)) {
                newStatusFilter = state.filter.active.filter(el => el != action.payload)
            } else {
                newStatusFilter = [...state.filter.active, action.payload]
            }

            const newFilter = { ...state.filter, active: newStatusFilter }
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                1,
                state.limit,
                state.search,
                state.sort,
                newFilter as unknown as { [key: string]: any[] })
            return { ...state, total: total, numberOfPage: numberOfPage, result: result, filter: newFilter, page: 1, listResult: [...result] }

        }
        case "goToPage": {
            if (state.page == action.payload) return state
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                action.payload,
                state.limit,
                state.search,
                state.sort,
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, page: action.payload, total: total, numberOfPage: numberOfPage, result: result, listResult: [...state.listResult, ...result] }
        }
        case "search": {
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                1,
                state.limit,
                action.payload,
                state.sort,
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, search: action.payload, total: total, numberOfPage: numberOfPage, page: 1, result: result, listResult: [...result] }
        }
        case "sort": {
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                state.page,
                state.limit,
                state.search,
                action.payload,
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, sort: action.payload, total: total, numberOfPage: numberOfPage, page: 1, result: result, listResult: [...result] }
        }
        case "reset": {
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                1,
                state.limit,
                state.search,
                state.sort,
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, page: 1, result: result, total: total, numberOfPage: numberOfPage, listResult: [...result] }
        }
    }
}
export default function useUserList(initData: UserListState) {
    const { data: users, isLoading, error } = useGetUserQuery()
    const [state, dispatch] = React.useReducer(reducer, initData)
    React.useEffect(() => { //set lại user khi có dữ liệu mới từ api
        if (users && !isLoading) {
            if (error != null)
                toast.error(error.message, { style: { color: "red" } })

            dispatch({
                type: "initData",
                payload: { users: users.users ?? [], total: users.total ?? 0, loading: isLoading, error: error != null },
            });
        }
    }, [users, isLoading, error]);
    return { state, dispatch }
}
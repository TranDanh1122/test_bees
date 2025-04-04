import React from "react"
import { UserListState, UserListActionType, TUser, useGetUserQuery } from "@/features/user"
import { filter } from "@/lib/filter"
/**
 reducer này sẽ nhận vào 1 state và 1 action, sau đó sẽ thực hiện hành động tương ứng với action.type
 * @param state dữ liệu hiện tại của reducer
 * @param action hành động đầu vào reducer
 * @returns 1 state mới sau khi đã thực hiện hành động tương ứng
 */
const reducer = (state: UserListState, action: UserListActionType) => {
    switch (action.type) {
        case "initData": {
            const { result, numberOfPage, total } = filter<TUser>(
                action.payload.users,
                state.page,
                state.limit,
                state.search,
                { type: state.sort, key: "name" },
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, result: result, users: action.payload.users, total: total, numberOfPage: numberOfPage }
        }
        case "setStatus": {
            return { ...state, loading: action.payload.loading, error: action.payload.error }
        }

        case "setLimit": {
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                1,
                action.payload,
                state.search,
                { type: state.sort, key: "name" },
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
            const newFilter = { ...state.filter, status: newStatusFilter }
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                state.page,
                state.limit,
                state.search,
                { type: state.sort, key: "name" },
                newFilter as unknown as { [key: string]: any[] })
            return { ...state, total: total, numberOfPage: numberOfPage, result: result, filter: newFilter }

        }
        case "goToPage": {
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                action.payload,
                state.limit,
                state.search,
                { type: state.sort, key: "name" },
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, page: action.payload, total: total, numberOfPage: numberOfPage, result: result, }
        }
        case "search": {
            const { result, numberOfPage, total } = filter<TUser>(
                state.users,
                1,
                state.limit,
                action.payload,
                { type: state.sort, key: "name" },
                state.filter as unknown as { [key: string]: any[] })
            return { ...state, search: action.payload, total: total, numberOfPage: numberOfPage, page: 1, result: result }
        }
    }
}
export default function useUserList(initData: UserListState) {
    const { data: users, isLoading, error } = useGetUserQuery()
    const [state, dispatch] = React.useReducer(reducer, initData)
    React.useEffect(() => { //set lại user khi có dữ liệu mới từ api
        if (users) {
            dispatch({
                type: "initData",
                payload: { users: users.users ?? [], total: users.total ?? 0 },
            });
        }
    }, [users]);
    React.useEffect(() => { //set lại status khi có sự cập nhật loading / error
        dispatch({
            type: "setStatus",
            payload: { loading: isLoading, error: error != null },
        });
    }, [isLoading, error]);
    return { state, dispatch }
}
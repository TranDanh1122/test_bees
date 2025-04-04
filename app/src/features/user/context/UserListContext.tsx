import React from "react";
import { UserListState, UserListActionType, useUserList } from "@/features/user";
const defaultState: UserListState = {
    users: [],
    result: [],
    total: 0,
    search: "",
    sort: "asc",
    filter: { active: [] },
    page: 1,
    numberOfPage: 1,
    limit: 10,
    loading: true,
    error: false,

}
export const UserListContext = React.createContext<{ state: UserListState, dispatch: React.Dispatch<UserListActionType> }>({ state: defaultState, dispatch: () => { } })
export default function UserListContextProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useUserList(defaultState)
    return (
        <UserListContext.Provider value={{ state, dispatch }}>
            {children}
        </UserListContext.Provider>
    )

}
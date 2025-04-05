import React from "react";
import { UserListContext } from "@/features/user";
/**
 * Custom hook quản lí các hành động với bảng user
 */
export const useUserListAction = () => {
    const context = React.useContext(UserListContext)
    if (!context) {
        throw new Error("Out of Provider");
    }
    const { state, dispatch } = context
    const setLimit = React.useCallback((value: string) => dispatch({ type: "setLimit", payload: Number(value) }), [])
    const goToPage = React.useCallback((page: number) => {
        if (page >= 1 && page <= state.numberOfPage && page !== state.page) {
            dispatch({ type: "goToPage", payload: page });
        }
    }, [state.numberOfPage, state.page, dispatch])
    const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "search", payload: e.target.value }), [])
    const handleFilter = React.useCallback((value: unknown) => dispatch({ type: "setFilterStatus", payload: value as unknown as boolean }), [])
    return { setLimit, goToPage, handleSearch, handleFilter, state, dispatch }
}
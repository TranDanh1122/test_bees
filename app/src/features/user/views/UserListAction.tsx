import React from "react";
import { Filter, Search, useUserListAction, ViewMode } from "@/features/user"
const StatusFilter = [{ text: "Inactive", value: false }, { text: "Active", value: true }]
export default React.memo(function UserListAction(): React.JSX.Element {
    const { handleSearch, handleFilter, state } = useUserListAction()
    return <div className="w-full bg-white rounded-sm p-5 space-y-3">
        <p className="text-neutral-500 font-semibold">Here's a list of users in your system!!!</p>
        <div className=" flex items-start justify-between">
            <div className="flex gap-2 flex-grow">
                <Search handleSearch={handleSearch} />
                <Filter label="Status" values={StatusFilter} checked={state.filter.active} onCheck={handleFilter} />
            </div>
            <ViewMode />
        </div>
    </div>
})
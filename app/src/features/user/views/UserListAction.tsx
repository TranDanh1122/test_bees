import React from "react";
import { Filter, Search, useUserListAction, ViewMode } from "@/features/user"
import { LayoutContext } from "@/context";
const StatusFilter = [{ text: "Inactive", value: false }, { text: "Active", value: true }]
export default React.memo(function UserListAction(): React.JSX.Element {
    const { handleSearch, handleFilter, state } = useUserListAction()
    const {layout} = React.useContext(LayoutContext)
    return <div className="w-full bg-white dark:bg-neutral-800 rounded-sm p-5 space-y-3">
        <p className="text-neutral-500 font-semibold text-sm">Here's a list of users in your system!!!</p>
        <div className={`flex justify-between  items-center ${layout.screen == "mobile" ? "flex-col gap-2" : "flex-row "}`}>
            <div className="flex gap-2 flex-grow w-full">
                <Search handleSearch={handleSearch} />
                <Filter label="Status" values={StatusFilter} checked={state.filter.active} onCheck={handleFilter} />
            </div>
            <ViewMode />
        </div>
    </div>
})
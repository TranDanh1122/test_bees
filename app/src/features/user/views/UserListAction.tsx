import React from "react";
import {
    Filter,
    Search,
    ViewMode,
} from "@/features/user"
const StatusFilter = [{ text: "Inactive", value: false }, { text: "Active", value: true }]
export default React.memo(function UserListAction(): React.JSX.Element {
    return <div className="w-full bg-white rounded-sm p-5 space-y-3">
        <p className="text-neutral-500 font-semibold">Here's a list of users in your system!!!</p>
        <div className=" flex items-start justify-between">
            <div className="w-1/3 flex gap-2">
                <Search />
                <Filter label="Status" values={StatusFilter} />
            </div>
            <ViewMode />
        </div>
    </div>
})
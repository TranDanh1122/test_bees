import React from "react";
import { Paginate, RowPerPage, UserListContext } from "@/features/user"
export default React.memo(function UseListFooter(): React.JSX.Element {
    const { state } = React.useContext(UserListContext)
    return (
        <div className="flex items-center justify-between w-full pt-3 border-t mt-3">
            <p className="font-semibold w-fit shrink-0 text-sm">Total : {state.total} users</p>
            <div className="flex gap-10">
                <RowPerPage />
                <Paginate />
            </div>
        </div>
    )
})
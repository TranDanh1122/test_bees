import React from "react";
import { Paginate, RowPerPage, useUserListAction } from "@/features/user"

export default React.memo(function UseListFooter(): React.JSX.Element {
    const { setLimit, goToPage, state } = useUserListAction()
    return (
        <div className="flex items-center justify-between w-full pt-3 border-t mt-3 max-h-[70px] min-h-[70px]">
            <p className="font-semibold w-fit shrink-0 text-sm">Total : {state.total} users</p>
            <div className="flex gap-10">
                <RowPerPage onSetLimit={setLimit} limit={state.limit} />
                <Paginate page={state.page} numberOfPage={state.numberOfPage} goToPage={goToPage} />
            </div>
        </div>
    )
})

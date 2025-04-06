import React from "react";
import { Paginate, RowPerPage, useUserListAction } from "@/features/user"
import { LayoutContext } from "@/context";

export default React.memo(function UseListFooter(): React.JSX.Element {
    const { setLimit, goToPage, state } = useUserListAction()
    const { layout } = React.useContext(LayoutContext)

    return (
        <>
            {
                layout.screen != "mobile" &&
                <div className="flex items-center justify-between w-full pt-3 border-t mt-3  min-h-[70px]">
                    <p className="font-semibold w-fit shrink-0 text-sm">Total : {state.total} users</p>
                    <div className="flex gap-10">
                        <RowPerPage onSetLimit={setLimit} limit={state.limit} />
                        <Paginate page={state.page} numberOfPage={state.numberOfPage} goToPage={goToPage} />
                    </div>
                </div>
            }
            {
                layout.screen == "mobile" &&
                <div className="flex flex-col gap-3 justify-between w-full pt-3 border-t mt-3  min-h-[70px]">
                    <div className="flex items-center justify-between gap-10">
                        <p className="font-semibold w-fit shrink-0 text-sm">Total : {state.total} users</p>
                        <RowPerPage onSetLimit={setLimit} limit={state.limit} />
                    </div>
                    <div className="w-fit mx-auto">
                        <Paginate page={state.page} numberOfPage={state.numberOfPage} goToPage={goToPage} />
                    </div>
                </div>
            }
        </>
    )
})

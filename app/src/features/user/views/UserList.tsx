import React from "react";
import { UserListAction, UserInfintyList, UserTable, ViewModeContext, useUserListAction } from "@/features/user"
import { UserTableSkeleton } from "../components/skeleton/TableUI";
import { UserListSkeleton } from "../components/skeleton/ListUI";
export default function UserList(): React.JSX.Element {
    const { mode } = React.useContext(ViewModeContext)
    const { state } = useUserListAction()

    return (<>
        <UserListAction />
        <div className="bg-white dark:bg-neutral-800 shadow-2xl rounded-md p-5">
            {
                state.error &&
                <h2 className="text-red-500 text-center">Error when loading user data</h2>
            }
            {
                !state.error && <React.Suspense fallback={mode == "table" ? <UserTableSkeleton /> : <UserListSkeleton />}>
                    {
                        mode == "table" &&
                        (state.loading ? <UserTableSkeleton /> : <UserTable key="table-mode" />)
                    }
                    {
                        mode == "list" &&
                        (state.loading ? <UserListSkeleton /> : <UserInfintyList key="list-mode" />)
                    }
                </React.Suspense>
            }



        </div>
    </>

    )
}
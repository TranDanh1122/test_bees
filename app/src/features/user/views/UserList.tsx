import React from "react";
import { UserListAction, UserTable, ViewModeContext } from "@/features/user"
export default function UserList(): React.JSX.Element {
    const { mode } = React.useContext(ViewModeContext)
    return (<>
        <UserListAction />
        <div className="bg-white shadow-2xl rounded-md p-5">
            {
                mode == "table" && <UserTable />
            }
            {
                mode == "list" && <UserList />
            }

        </div>
    </>

    )
}
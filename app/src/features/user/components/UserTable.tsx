import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TUser, UserListFooter, UserTableItem, useUserListAction } from "@/features/user"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
export default React.memo(function UserTable(): React.JSX.Element {
    const { state } = useUserListAction()
    console.log(state.result);

    return (<>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="flex items-center gap-2 max-w-[250px]">
                        <Checkbox className="" id="checkall" />
                        <Label htmlFor="checkall">Name</Label>
                    </TableHead>
                    <TableHead className="max-w-[150px]">Balance(s)</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="max-w-[100px]">Registration</TableHead>
                    <TableHead className="max-w-[80px]">Status</TableHead>
                    <TableHead className="max-w-[60px]">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    (!state.result || state.result.length == 0) &&
                    <TableRow aria-colspan={6}>
                        <TableCell colSpan={6}>
                            <p className="text-center font-extrabold"> No data</p>
                        </TableCell>
                    </TableRow>

                }
                {
                    (state.result && state.result.length > 0) &&
                    state.result.map((el: TUser) => <UserTableItem key={el.id} user={el} />)
                }

            </TableBody>
        </Table>


        <UserListFooter />


    </>)
})

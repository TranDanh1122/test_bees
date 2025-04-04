import React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TUser, UserListAction, UserListFooter } from "@/features/user"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import UserTableItem from "../components/UserTableItem";
import { useGetUserQuery } from "../queries/useUserQuery";
const FakeUsers: TUser[] = [
    {
        id: "123erfv",
        name: "Danh",
        balance: 90.8,
        email: "trandanh14042000@gmail.com",
        registerAt: new Date(),
        active: true
    },
    {
        id: "123e345thrfv",
        name: "Trần",
        balance: 910.81,
        email: "trandanh14042000@gmail.com",
        registerAt: new Date(),
        active: false
    }
]
export default function UserList(): React.JSX.Element {
    return (<>
        <UserListAction />
        <div className="bg-white shadow-2xl rounded-md p-5">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="flex items-center gap-2">
                            <Checkbox className="" id="checkall" />
                            <Label htmlFor="checkall">Name</Label>
                        </TableHead>
                        <TableHead>Balance(s)</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Registration</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        FakeUsers.map(el => <UserTableItem key={el.id} user={el} />)
                    }
                </TableBody>

            </Table>
            <UserListFooter />
        </div>
    </>

    )
}
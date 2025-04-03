import React from "react";
import { RegisterDate, TUser } from "@/features/user";
import { TableCell, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash } from "lucide-react";

interface Props {
    user: TUser,
}
export default function UserTableItem({ user }: Props): React.JSX.Element {
    const balance = React.useMemo(() => { //dùng usememo vì cái biến đổi này khá nặng nếu list lớn => chỉ biến 1 lần, ko cần biến lại khi re-render
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(user.balance)
    }, [user.balance])

    return (
        <TableRow>
            <TableCell className="font-medium flex gap-2 items-center">
                <Checkbox className="" id={user.id} />
                <Label htmlFor={user.id}>{user.name}</Label>
            </TableCell>
            <TableCell>{balance}</TableCell>
            <TableCell>
                <a href={`mailto:${user.email}`}>
                    {user.email}
                </a>
            </TableCell>
            <TableCell>
                <RegisterDate date={user.registerAt} />
            </TableCell>
            <TableCell>
                {
                    user.active &&
                    <Badge variant="outline" className="border-blue-500 text-blue-500">
                        Active
                    </Badge>
                }
                {
                    !user.active &&
                    <Badge variant="outline" className="border-red-500 text-red-500" >
                        Inactive
                    </Badge>
                }

            </TableCell>
            <TableCell className="flex gap-2">
                <Edit className="size-4.5 text-blue-500 cursor-pointer" />
                <Trash className="size-4.5 text-red-500 cursor-pointer" />
            </TableCell>
        </TableRow>
    )
}
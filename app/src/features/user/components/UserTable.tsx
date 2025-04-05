import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TUser, UserListContext, UserListFooter, UserTableItem } from "@/features/user"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton"
import { UseListFooterSkeleton } from "../views/UseListFooter";

export default function UserTable(): React.JSX.Element {
    const { state } = React.useContext(UserListContext)
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
                    state.loading ?
                        <TableSkeleton limit={state.limit} />
                        : (
                            <React.Suspense fallback={<TableSkeleton limit={state.limit} />}>

                                {
                                    !state.result &&
                                    <TableRow aria-colspan={6}>
                                        <TableCell colSpan={6}>
                                            <p className="text-center"> No data</p>
                                        </TableCell>
                                    </TableRow>

                                }
                                {
                                    state.result &&
                                    state.result.map((el: TUser) => <UserTableItem key={el.id} user={el} />)
                                }

                            </React.Suspense>
                        )
                }

            </TableBody>
        </Table>
        {!state.loading ? (
            <React.Suspense fallback={<UseListFooterSkeleton />}>
                <UserListFooter />
            </React.Suspense>
        ) : (
            <UseListFooterSkeleton />
        )}

    </>)
}
const TableSkeleton = ({ limit }: { limit: number }) => {
    return (
        <>
            {
                Array.from({ length: limit }).map((_, i) => (
                    <TableRow key={i} className="min-h-[40px] max-h-[40px]">
                        {
                            Array.from({ length: 6 }).map((_, index: number) => (
                                <TableCell key={index} className={index == 0 ? "flex gap-2" : ""}>
                                    {
                                        index == 0 && <Skeleton className="size-6 rounded-full" />

                                    }
                                    <Skeleton className="h-[20px] w-full" />
                                </TableCell>
                            ))
                        }
                    </TableRow>
                ))
            }
        </>
    )


}
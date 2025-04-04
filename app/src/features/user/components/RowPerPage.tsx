import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { UserListContext } from "@/features/user";
/**
 * 
 *  React component cho phần chọn số lượng hàng hiển thị trên 1 trang
 */
export default function RowPerPage(): React.JSX.Element {
    const { state, dispatch } = React.useContext(UserListContext)
    return (
        <Select defaultValue={`${state.limit}`} onValueChange={(value) => dispatch({ type: "setLimit", payload: Number(value) })}>
            <div className="flex items-center gap-2">
                <Label>Rows Per Page:</Label>
                <SelectTrigger className="w-fit focus-visible:ring-0">
                    <SelectValue placeholder="10" />
                </SelectTrigger>
            </div>
            <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="50">50</SelectItem>
            </SelectContent>
        </Select>

    )
}
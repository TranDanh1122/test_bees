import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
interface Props {
    date: Date
}
/**
 * React component cho phần hiển thị ngày đăng kí cho mỗi người dùng
 * @prop {Date} date: ngày đăng kí của người dùng
 * 
 */
export default React.memo(function RegisterDate({ date }: Props): React.JSX.Element {
    const [registerDate, registerTime] = React.useMemo(() => {
        const [dateStr, timeStr] = new Date(date).toISOString().split("T")
        return [dateStr, timeStr.split(".")[0] ?? timeStr]
    }, [date])
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{registerDate}</TooltipTrigger>
                <TooltipContent>
                    <p>{registerDate} {registerTime}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
})
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
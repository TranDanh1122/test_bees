
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PlusCircle } from "lucide-react"
import React from "react"
type values = { text: string, value: unknown }
interface Props {
    label: string,
    values: values[],
    checked: unknown[],
    onCheck: (value: unknown) => void
}
/**
 * React component chọn 1 hoặc nhiều filter cho user list
 *  
 */
export default React.memo(function Filter({ label, values, checked, onCheck }: Props): React.JSX.Element {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="border border-dashed font-semibold px-2 py-1.5 rounded-sm text-sm flex items-center gap-3">
                    <PlusCircle className="size-4.5" />
                    {label}

                    {
                        checked.length > 0 &&
                        <>
                            <span>|</span>
                            {
                                checked.map((el, index) => {
                                    const text = values.find((val) => val.value == el)?.text
                                    return <span key={index} className="text-xs p-1 bg-neutral-200 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-200 rounded-sm">{text}</span>
                                })
                            }

                        </>

                    }
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
                {
                    values.map((el: values) => <DropdownMenuCheckboxItem key={el.text}
                        checked={checked.includes(el.value)}
                        onCheckedChange={() => onCheck(el.value)}
                    >
                        {el.text}
                    </DropdownMenuCheckboxItem>)
                }


            </DropdownMenuContent>
        </DropdownMenu>
    )
})

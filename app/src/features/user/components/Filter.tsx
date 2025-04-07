
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutContext } from "@/context"
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
    const { layout } = React.useContext(LayoutContext)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={`border border-dashed font-semibold px-2 py-1.5 rounded-sm text-sm flex items-center ${layout.screen == "mobile" ? "gap-1" : "gap-3"}`}>
                    <PlusCircle className="size-4.5" />
                    {label}

                    {
                        checked.length > 0 &&
                        <>
                            <span>|</span>
                            {layout.screen != "mobile" &&
                                checked.map((el, index) => {
                                    const text = values.find((val) => val.value == el)?.text
                                    return <span key={index} className="text-xs p-1 bg-neutral-200 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-200 rounded-sm line-clamp-1">{text}</span>
                                })
                            }
                            {layout.screen == "mobile" &&
                                <>
                                    <span className="text-xs p-1 bg-neutral-200 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-200 rounded-sm line-clamp-1">{values.find((val) => val.value == checked[0])?.text}</span>
                                    {checked.length > 1 && <span className="text-xs p-1 bg-neutral-200 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-200 rounded-sm line-clamp-1">+{checked.length - 1}</span>}
                                </>



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

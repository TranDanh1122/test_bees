
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PlusCircle } from "lucide-react"
type values = { text: string, value: unknown }
interface Props {
    label: string,
    values: values[]
}
export default function Filter({ label, values }: Props): React.JSX.Element {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="border border-dashed font-semibold px-2 py-1.5 rounded-sm text-sm flex items-center gap-3">
                    <PlusCircle className="size-4.5" />
                    {label}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
                {
                    values.map((el: values) => <DropdownMenuCheckboxItem key={el.text}
                    // checked={showStatusBar}
                    // onCheckedChange={setShowStatusBar}
                    >
                        {el.text}
                    </DropdownMenuCheckboxItem>)
                }


            </DropdownMenuContent>
        </DropdownMenu>
    )
}

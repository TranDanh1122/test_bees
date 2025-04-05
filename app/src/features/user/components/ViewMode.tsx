import React from "react";
import { List, Table } from "lucide-react";
import { ViewModeContext } from "@/features/user";
/**
 * React component chọn view mode
 *  
 */
export default React.memo(function ViewMode(): React.JSX.Element {
    const { mode, setMode } = React.useContext(ViewModeContext)
    return (
        <div className="flex items-center gap-2">
            <span className="border border-[var(--hover-color)] rounded-sm size-none p-1">
                <Table className={`size-4 ${mode == "table" ? "text-[var(--hover-color)]" : "text-neutral-400"}`} />
            </span>
            <span className="border border-neutral-400 rounded-sm size-none p-1">
                <List className={`size-4 ${mode == "list" ? "text-[var(--hover-color)]" : "text-neutral-400"}`} />
            </span>
        </div>)
})
import React from "react";
import { List, Table } from "lucide-react";
import { ViewModeContext } from "@/features/user";
/**
 * React component chọn view mode
 *  
 */
export default React.memo(function ViewMode(): React.JSX.Element {
    const { mode, setMode } = React.useContext(ViewModeContext)
    const changeMode = (mode: string) => {
        setMode((prev) => {
            if (prev != mode) return mode
            return prev
        })
    }
    return (
        <div className="flex items-center gap-2">
            <span onClick={(e) => { e.stopPropagation(); changeMode("table") }} className={`border ${mode == "table" ? "border-[var(--hover-color)]" : "border-neutral-400"} rounded-sm size-none p-1`}>
                <Table onClick={(e) => { e.stopPropagation(); changeMode("table") }} className={`size-4 ${mode == "table" ? "text-[var(--hover-color)]" : "text-neutral-400"}`} />
            </span>
            <span onClick={(e) => { e.stopPropagation(); changeMode("list") }} className={`border ${mode == "list" ? "border-[var(--hover-color)]" : "border-neutral-400"} rounded-sm size-none p-1`}>
                <List onClick={(e) => { e.stopPropagation(); changeMode("list") }} className={`size-4 ${mode == "list" ? "text-[var(--hover-color)]" : "text-neutral-400"}`} />
            </span>
        </div>)
})
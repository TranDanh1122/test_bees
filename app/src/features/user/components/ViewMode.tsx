import React from "react";
import { List, Table } from "lucide-react";
export default function ViewMode(): React.JSX.Element {
    return (
        <div className="flex items-center gap-2">
            <span className="border border-[var(--hover-color)] rounded-sm size-none p-1">
                <Table className="size-4 text-[var(--hover-color)]" />
            </span>
            <span className="border border-neutral-400 rounded-sm size-none p-1">
                <List className="size-4 text-neutral-400" />
            </span>
        </div>)
}
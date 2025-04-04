import { Input } from "@/components/ui/input";
import React from "react";
/**
 * React component hiển thị input search
 * 
 */
export default function Search(): React.JSX.Element {
    console.log("re-render");

    return ( <Input className="focus-visible:ring-0 rounded-md focus-visible:border-[var(--hover-color)] hover:border-[var(--hover-color)]" placeholder="Filter..." />)
}
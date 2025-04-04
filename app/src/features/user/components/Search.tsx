import { Input } from "@/components/ui/input";
import { useDebound } from "@/hooks/useDebound";
import React from "react";
import { UserListContext } from "@/features/user";
/**
 * React component hiển thị input search
 * 
 */
export default function Search(): React.JSX.Element {
    const { dispatch } = React.useContext(UserListContext)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "search", payload: e.target.value })
    const deboundSearch = useDebound(handleSearch, 300)
    return (<Input onChange={deboundSearch} className="focus-visible:ring-0 rounded-md focus-visible:border-[var(--hover-color)] hover:border-[var(--hover-color)] max-w-md" placeholder="Filter..." />)
}
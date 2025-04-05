import { Input } from "@/components/ui/input";
import { useDebound } from "@/hooks/useDebound";
import React from "react";
/**
 * React component hiển thị input search
 * 
 */
interface Props {
    handleSearch : (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default React.memo(function Search({handleSearch} : Props): React.JSX.Element {    
    const deboundSearch = useDebound(handleSearch, 300)
    return (<Input onChange={deboundSearch} className="focus-visible:ring-0 rounded-md focus-visible:border-[var(--hover-color)] hover:border-[var(--hover-color)] max-w-md" placeholder="Filter..." />)
})
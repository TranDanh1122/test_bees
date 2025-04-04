import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { UserListContext } from "@/features/user";

/**
 * React component render phần chọn trang / phân trang
 *  
 */
export default React.memo(function Paginate(): React.JSX.Element {
    const { state, dispatch } = React.useContext(UserListContext)    
    const goToPage = (page: number) => {
        if (page >= 1 && page <= state.numberOfPage && page !== state.page) {
            dispatch({ type: "goToPage", payload: page });
        }
    };
    return (
        <Pagination className="w-fit mx-0 [&__a]:cursor-pointer [&__a]:border">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => goToPage(state.page - 1)} />
                </PaginationItem>
                {
                    state.page > 3 &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(1)} > {1}</PaginationLink>
                    </PaginationItem>
                }
                {state.page > 2 &&
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                }
                {
                    state.page > 1 &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(state.page - 1)} > {state.page - 1}</PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationLink className="text-[var(--hover-color)] border-[var(--hover-color)]">{state.page}</PaginationLink>
                </PaginationItem>
                {
                    state.page < state.numberOfPage &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(state.page + 1)}>{state.page + 1}</PaginationLink>
                    </PaginationItem>
                }
                {
                    state.page < state.numberOfPage - 2 &&
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                }
                {
                    state.page < state.numberOfPage - 1 &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(state.numberOfPage)}>{state.numberOfPage}</PaginationLink>
                    </PaginationItem>
                }

                <PaginationItem>
                    <PaginationNext onClick={() => goToPage(state.page + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination >
    )
})
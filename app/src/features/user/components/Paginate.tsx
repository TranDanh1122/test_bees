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

/**
 * React component render phần chọn trang / phân trang
 *  
 */
interface Props {
    goToPage: (page: number) => void,
    page: number,
    numberOfPage: number
}
export default React.memo(function Paginate({ goToPage, page, numberOfPage }: Props): React.JSX.Element {
    return (
        <Pagination className="w-fit mx-0 [&__a]:cursor-pointer [&__a]:border">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => goToPage(page - 1)} />
                </PaginationItem>

                {page > 2 &&
                    <>
                        <PaginationItem>
                            <PaginationLink onClick={() => goToPage(1)} > {1}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    </>

                }
                {
                    page > 1 &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(page - 1)} > {page - 1}</PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationLink className="text-[var(--hover-color)] border-[var(--hover-color)]">{page}</PaginationLink>
                </PaginationItem>
                {
                    page < numberOfPage &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(page + 1)}>{page + 1}</PaginationLink>
                    </PaginationItem>
                }
                {
                    page < numberOfPage - 2 &&
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                }
                {
                    page < numberOfPage - 1 &&
                    <PaginationItem>
                        <PaginationLink onClick={() => goToPage(numberOfPage)}>{numberOfPage}</PaginationLink>
                    </PaginationItem>
                }

                <PaginationItem>
                    <PaginationNext onClick={() => goToPage(page + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination >
    )
})
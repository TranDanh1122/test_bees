import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton for the entire table
//chụp ảnh UI và gửi AI viết cho nhanh

export const UserTableSkeleton = ({ limit = 10 }: { limit?: number }) => {
    return (
        <div className="w-full">
            <Table>
                {/* Table Header Skeleton */}
                <TableHeaderSkeleton />
                {/* Table Body Skeleton */}
                <TableBodySkeleton limit={limit} />
            </Table>
            {/* Table Footer Skeleton */}
            <TableFooterSkeleton />
        </div>
    );
};

// Skeleton for the Table Header
const TableHeaderSkeleton = () => {
    return (
        <TableHeader>
            <TableRow className="h-10">
                {/* Name Column */}
                <TableHead className="flex items-center gap-2 max-w-[250px] h-10">
                    <Skeleton className="size-6 rounded-full" />
                    <Skeleton className="h-[20px] w-[50px]" />
                </TableHead>
                {/* Balance(s) Column */}
                <TableHead className="max-w-[150px] h-10">
                    <Skeleton className="h-[20px] w-[80px]" />
                </TableHead>
                {/* Email Column */}
                <TableHead className="h-10">
                    <Skeleton className="h-[20px] w-[100px]" />
                </TableHead>
                {/* Registration Column */}
                <TableHead className="max-w-[100px] h-10">
                    <Skeleton className="h-[20px] w-[80px]" />
                </TableHead>
                {/* Status Column */}
                <TableHead className="max-w-[80px] h-10">
                    <Skeleton className="h-[20px] w-[60px]" />
                </TableHead>
                {/* Action Column */}
                <TableHead className="max-w-[60px] h-10">
                    <Skeleton className="h-[20px] w-[40px]" />
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};

// Skeleton for the Table Body
const TableBodySkeleton = ({ limit }: { limit: number }) => {
    return (
        <TableBody>
            {Array.from({ length: limit }).map((_, i) => (
                <TableRow key={i} className="min-h-[40px] max-h-[40px]">
                    {/* Name Column */}
                    <TableCell className="flex items-center gap-2 max-w-[250px]">
                        <Skeleton className="size-6 rounded-full" />
                        <Skeleton className="h-[20px] w-[120px]" />
                    </TableCell>
                    {/* Balance(s) Column */}
                    <TableCell className="max-w-[150px]">
                        <Skeleton className="h-[20px] w-[60px]" />
                    </TableCell>
                    {/* Email Column */}
                    <TableCell>
                        <Skeleton className="h-[20px] w-[200px]" />
                    </TableCell>
                    {/* Registration Column */}
                    <TableCell className="max-w-[100px]">
                        <Skeleton className="h-[20px] w-[80px]" />
                    </TableCell>
                    {/* Status Column */}
                    <TableCell className="max-w-[80px]">
                        <Skeleton className="h-[24px] w-[60px] rounded-md" />
                    </TableCell>
                    {/* Action Column */}
                    <TableCell className="max-w-[60px] flex items-center gap-2">
                        <Skeleton className="size-6 rounded-full" />
                        <Skeleton className="size-6 rounded-full" />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

// Skeleton for the Table Footer (reusing your UseListFooterSkeleton)
const TableFooterSkeleton = () => {
    return (
        <div className="flex items-center justify-between w-full pt-3 max-h-[70px] min-h-[70px] border-t mt-3">
            <div className="font-semibold w-fit shrink-0 text-sm">
                <Skeleton className="w-[100px] h-[14px] rounded-full" />
            </div>
            <div className="flex gap-10">
                <Skeleton className="w-[150px] h-[40px] rounded-full" />
                <Skeleton className="w-[350px] h-[40px] rounded-full" />
            </div>
        </div>
    );
};
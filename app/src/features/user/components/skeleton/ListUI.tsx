import { Skeleton } from "@/components/ui/skeleton";

// Skeleton for the entire user list
export const UserListSkeleton = ({ count = 5 }: { count?: number }) => {
    return (
        <div className="w-full max-h-[400px] overflow-y-auto border rounded-lg p-4 bg-white dark:bg-neutral-800 shadow-sm">
            <div className="flex flex-col gap-2">
                {Array.from({ length: count }).map((_, i) => (
                    <UserItemSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

// Skeleton for an individual user item
export const UserItemSkeleton = () => {
    return (
        <div className="flex items-center gap-3 p-4 border-b last:border-b-0 min-h-[80px]">
            {/* Icon/Avatar Placeholder */}
            <Skeleton className="size-6 rounded-full" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-1">
                {/* Name and Status */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-[20px] w-[120px]" />
                    <Skeleton className="h-[24px] w-[60px] rounded-md" />
                </div>
                {/* Email */}
                <Skeleton className="h-[16px] w-[200px]" />
                {/* Registration Date */}
                <Skeleton className="h-[16px] w-[100px]" />
            </div>

            {/* More Options Icon */}
            <Skeleton className="size-6 rounded-full" />
        </div>
    );
};
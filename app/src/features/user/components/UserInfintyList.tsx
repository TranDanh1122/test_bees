import React from "react";
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { TUser, useUserListAction, UserListItem } from "@/features/user";
import { useDebound } from "@/hooks/useDebound";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserInfintyList(): React.JSX.Element {
    const { state, goToPage, dispatch } = useUserListAction()
    const timeoutRef = React.useRef<number | null>(null)
    const fakeFetchAPI = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => { //giả loading fetch API
            goToPage(state.page + 1)
        }, 2000)
    }
    const handle = useDebound(fakeFetchAPI, 500)
    const [users, setUser] = React.useState<TUser[]>([])
    React.useLayoutEffect(() => {
        setUser([])
        dispatch({ type: "reset" })
    }, [state.filter, state.search, state.sort, dispatch])
    React.useEffect(() => {
        setUser((prev) => {
            const checkDuplicate = state.result.every(el =>
                users.some(item =>
                    JSON.stringify(item) === JSON.stringify(el)
                ))
            if (checkDuplicate) return prev
            return [...prev, ...state.result]
        })
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
    }, [state.result])
    return (
        <InfiniteLoader
            isItemLoaded={(index: number) => !!users[index]}
            itemCount={state.total}
            loadMoreItems={handle}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    height={500}
                    itemCount={state.numberOfPage == state.page ? users.length : users.length + 1}
                    itemSize={150}
                    width="100%"
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {({ index, style }) => {
                        const user = users[index]
                        return <div style={style} key={index}>
                            {user &&
                                <React.Suspense fallback={<UserListItemSkeleton />}>
                                    <UserListItem user={users[index]} />
                                </React.Suspense>
                            }
                            {
                                !user &&
                                <div className="rounded-full animate-spin border-s-2 border-s-neutral-600 size-10 mx-auto"></div>
                            }
                        </div>
                    }}
                </List>
            )}
        </InfiniteLoader>

    )
}
const UserListItemSkeleton = () => {
    return <div className="shadow-md h-[140px] border">
        <div className="flex items-center space-x-4 w-full ">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
        <Skeleton className="h-4 w-[200px]" />
    </div>

}
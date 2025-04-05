import React from "react";
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { TUser, useUserListAction, UserListItem } from "@/features/user";
import { useDebound } from "@/hooks/useDebound";
import { UserItemSkeleton } from "@/features/user/components/skeleton/ListUI"
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
                                <UserListItem user={users[index]} />
                            }
                            {
                                !user && <UserItemSkeleton />

                            }
                        </div>
                    }}
                </List>
            )}
        </InfiniteLoader>

    )
}

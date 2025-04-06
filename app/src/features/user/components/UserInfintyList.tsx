import React from "react";
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { TUser, useUserListAction, UserListItem } from "@/features/user";
import { useDebound } from "@/hooks/useDebound";
import { UserItemSkeleton } from "@/features/user/components/skeleton/ListUI"
import { LayoutContext } from "@/context";
export default React.memo(function UserInfintyList(): React.JSX.Element {
    const { state, goToPage, dispatch } = useUserListAction()
    const timeoutRef = React.useRef<number | null>(null)
    const { layout } = React.useContext(LayoutContext)
    const fakeFetchAPI = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => { //giả loading fetch API
            goToPage(state.page + 1)
        }, 2000)
    }
    const handle = useDebound(fakeFetchAPI, 500)
    const [users, setUser] = React.useState<TUser[]>([])
    const resetRef = React.useRef<string>(`${state.filter.toString()}_${state.search}_${state.sort.toString()}`)
    React.useEffect(() => {
        const currentFiler = `${state.filter.toString()}_${state.search}_${state.sort.toString()}`
        if (resetRef.current != currentFiler) {
            setUser((prev) => {
                if (prev.length > 0) return []
                return prev
            })
            resetRef.current = currentFiler
            dispatch({ type: "reset" })
        } else {
            setUser((prev) => {
                const checkDuplicate = state.result.every(el => prev.some(item => item.id === el.id))
                if (checkDuplicate) return prev
                return [...prev, ...state.result]
            })
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
    }, [state.result, state.filter, state.search, state.sort])

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
                    itemSize={layout.screen == "mobile" ? 250 : 150}
                    width="100%"
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                    itemKey={(index) => users[index]?.id ?? `skeleton-${index}`}
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
})

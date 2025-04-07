import React from "react";
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useUserListAction, UserListItem } from "@/features/user";
import { useDebound } from "@/hooks/useDebound";
import { UserItemSkeleton } from "@/features/user/components/skeleton/ListUI"
import { LayoutContext } from "@/context";

export default React.memo(function UserInfintyList(): React.JSX.Element {
    const { state, goToPage } = useUserListAction()
    const timeoutRef = React.useRef<number | null>(null)
    const { layout } = React.useContext(LayoutContext)
    const didMountRef = React.useRef(false)

    const fakeFetchAPI = () => {
        alert(1)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => { //giả loading fetch API
            goToPage(state.page + 1)
        }, 2000)
    }
    const handle = useDebound(fakeFetchAPI, 500)

    return (
        <>
            {
                (!state.listResult || state.listResult.length == 0) && <>
                <h2 className="w-full text-center font-extrabold">No Data</h2>
                </>
            }
            {
                (state.listResult && state.listResult.length > 0) && <InfiniteLoader
                    isItemLoaded={(index: number) => (index < state.listResult.length)}
                    itemCount={state.total}
                    loadMoreItems={() => {
                        if (!didMountRef.current) {
                            didMountRef.current = true
                            return Promise.resolve()
                        }
                        return handle()
                    }}
                >
                    {({ onItemsRendered, ref }) => (
                        <List
                            height={500}
                            itemCount={state.numberOfPage == state.page ? state.listResult.length : state.listResult.length + 1}
                            itemSize={layout.screen == "mobile" ? 250 : 180}
                            width="100%"
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                            itemKey={(index) => state.listResult[index]?.id ?? `skeleton-${index}`}
                        >
                            {({ index, style }) => {
                                const user = state.listResult[index]
                                return <div style={style} key={index}>
                                    {user &&
                                        <UserListItem user={state.listResult[index]} />
                                    }
                                    {
                                        !user && <UserItemSkeleton />

                                    }
                                </div>
                            }}
                        </List>
                    )}
                </InfiniteLoader>
            }
        </>

    )
})

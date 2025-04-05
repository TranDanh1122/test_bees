import React from "react";
export default function GlobalLoading(): React.JSX.Element {
    return <div className="fixed top-0 left-0 w-full h-full bg-neutral-200 flex items-center justify-center">
        <div className="size-20 border-s-2 border-s-neutral-800 animate-spin rounded-full"></div>
    </div>
}
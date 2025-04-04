import React from "react"

export const useDebound = (callback: (...args: any) => void, delay: number) => {
    const deboundRef = React.useRef<number | null>(null)
    const handler = (...args: any) => {
        if (deboundRef.current) clearTimeout(deboundRef.current)
        deboundRef.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }
    return handler
}
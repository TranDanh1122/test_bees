import React from "react"
/**
 * 
 * @param callback : hàm cần debounce, hàm này sẽ được gọi sau 1 khoảng thời gian (delay)
 * @param delay : thời gian delay (ms)
 * @returns hàm nhận vào các tham số của callback, sẽ thực thi callbacl trong quá trình thực thi (sau debound time)
 */
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
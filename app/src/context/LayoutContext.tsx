import React from "react";
interface Layout {
    screen: string
}
/**
 * Context quản lí màn hình
 * Thực tế với bài test này, chỉ cần css là đủ response, nhưng ứng triển khai hook này để thể hiện cách handle responsive mà ứng viên nghĩ
 * Context này được dùng trong các trường hợp ẩn hiện component khi bằng logic render (không phải displaynone) - tránh tải dư và nặng cây dom
 *
 */
const MAX_MOBILE = 767
const MAX_TABLET = 1023

export const LayoutContext = React.createContext<{ layout: Layout, setLayout: React.Dispatch<React.SetStateAction<Layout>> }>({ layout: { screen: "mobile" }, setLayout: () => { } })
export default function LayoutContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [layout, setLayout] = React.useState<Layout>(() => {
        if (window.innerWidth <= MAX_MOBILE) return { screen: "mobile" }
        if (window.innerWidth > MAX_MOBILE && window.innerWidth <= MAX_TABLET) return { screen: "tablet" }
        if (window.innerWidth > MAX_TABLET) return { screen: "desktop" }
        return { screen: "mobile" }
    })
    React.useEffect(() => { //effect này đăng kí 1 event, trigger mỗi khi người dùng resize
        const handleResize = () => {
            setLayout((prev) => {
                if (window.innerWidth <= MAX_MOBILE && prev.screen != "mobile") {
                    return { screen: "mobile" }
                } else if (window.innerWidth > MAX_MOBILE && window.innerWidth <= MAX_TABLET && prev.screen != "tablet") {
                    return { screen: "tablet" }
                } else if (window.innerWidth > MAX_TABLET && prev.screen != "desktop") {
                    return { screen: "desktop" }
                }
                return prev
            })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return <LayoutContext.Provider value={{ layout, setLayout }}>
        {children}
    </LayoutContext.Provider>
}
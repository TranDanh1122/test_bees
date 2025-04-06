import React from "react";
export type Theme = "light" | "dark"
export const ThemeContext = React.createContext<{ theme: Theme, setTheme: (theme: Theme) => void }>({ theme: "light", setTheme: () => { } })
/**
 * Theem context, quản lí theme cho toàn bộ app
 * @param (React.ReactNode) : children
 * @returns Context Provider
 */
export default function ThemeContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const localTheme = localStorage.getItem("bee_theme")
    const [theme, changeTheme] = React.useState<Theme>(localTheme as Theme || "light")
    const setTheme = (theme: Theme) => {
        changeTheme((prev) => {
            if (prev == theme) return prev

            return theme
        })
    }
    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme == "dark")
        localStorage.setItem("bee_theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>

}
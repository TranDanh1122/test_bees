import React from "react";
import { useUserListAction } from "@/features/user";
export const ViewModeContext = React.createContext<{ mode: string, setMode: (mode: string) => void }>({ mode: "table", setMode: () => { } })
export default function ViewModeContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [mode, changeMode] = React.useState<string>(localStorage.getItem("bee_viewmode") || "table")
    const { dispatch } = useUserListAction()
    const setMode = (mode: string) => {
        changeMode((prev) => {
            if (mode == prev) return prev
            dispatch({ type: "reset" })
            localStorage.setItem("bee_viewmode", mode)
            return mode
        })
    }

    return <ViewModeContext.Provider value={{ mode, setMode }}>
        {children}
    </ViewModeContext.Provider>
}
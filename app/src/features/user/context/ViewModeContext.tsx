import React from "react";
export const ViewModeContext = React.createContext<{ mode: string, setMode: React.Dispatch<React.SetStateAction<string>> }>({ mode: "table", setMode: () => { } })
export default function ViewModeContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [mode, setMode] = React.useState<string>("table")
    return <ViewModeContext.Provider value={{ mode, setMode }}>
        {children}
    </ViewModeContext.Provider>
}
import { LayoutContext, ThemeContext } from "@/context";
import { Moon, Sun } from "lucide-react";
import React from "react";
export default React.memo(function Header(): React.JSX.Element { //ko cần re-render lại component trong hầu như mọi trường hợp (trừ đổi theme / thay layout) => memo    
    const { theme, setTheme } = React.useContext(ThemeContext)
    const {layout} = React.useContext(LayoutContext)    
    return (
        <header className="flex items-center justify-between pt-10  text-white">
            <h1 className={`font-bold ${layout.screen == "mobile" ? "text-3xl tracking-widest" : "text-5xl tracking-[1rem]"}  uppercase`}>User List</h1>
            {
                theme == "light"
                    ?
                    <Moon onClick={() => setTheme("dark")} className="size-6" />
                    :
                    <Sun onClick={() => setTheme("light")} className="size-6" />

            }
        </header>
    )

})
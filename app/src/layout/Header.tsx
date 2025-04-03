import { Moon } from "lucide-react";
import React from "react";
export default React.memo(function Header(): React.JSX.Element { //ko cần re-render lại component trong hầu như mọi trường hợp (trừ đổi theme / thay layout) => memo
    return (
        <header className="flex items-center justify-between pt-10  text-white">
            <h1 className="font-bold text-3xl tracking-[1rem] uppercase">User List</h1>
            <Moon className="size-6" />
        </header>
    )

})
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext } from "@/context";
interface Props {
    children: React.ReactNode
}
export default function AppLayout({ children }: Props): React.JSX.Element {
    const queryClient = new QueryClient
    const { theme } = React.useContext(ThemeContext)
    
    return (
        <QueryClientProvider client={queryClient} >
            <div className="min-w-screen min-h-screen relative overflow-hidden">
                <picture className="w-full h-80 absolute top-0 left-0">
                    <source media="(max-width:767px)" srcSet={`${theme == "light" ? "assets/bg-light-mobile.jpg" : "assets/bg-dark-mb.png"}`} />
                    <source media="(min-width:768px)" srcSet={`${theme == "light" ? "assets/bg-light.jpg" : "assets/bg-dark.png"}`} />
                    <img src={`${theme == "light" ? "assets/bg-light.jpg" : "assets/bg-dark.png"}`} className="size-full object-cover" />
                </picture>
                <main className="lg:w-2/3 mx-auto space-y-6 relative z-10">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </div>
        </QueryClientProvider>
    )
}
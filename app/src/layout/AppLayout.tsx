import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface Props {
    children: React.ReactNode
}
export default function AppLayout({ children }: Props): React.JSX.Element {
    const queryClient = new QueryClient
    return (
        <QueryClientProvider client={queryClient} >
            <div className="min-w-screen min-h-screen relative">
                <picture className="w-screen h-80 absolute top-0 left-0">
                    <source media="(max-width:767px)" srcSet="assets/bg-light-mobile.jpg" />
                    <source media="(min-width:768px)" srcSet="assets/bg-light.jpg" />
                    <img src="assets/bg-light.jpg" className="size-full object-cover" />
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
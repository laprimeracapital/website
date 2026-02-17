import { Outlet } from "react-router-dom";
import Header from "../layout/header";
import { Toaster } from "sonner";

export default function RootLayout () {

    return (

        <>
        
            <aside className="none"></aside>

            <main className="w-full">
                <Header/>
                <Outlet/>
            </main>

            <aside className="none"></aside>

            <Toaster position="top-center" duration={4000} closeButton />
        
        </>

    )

}
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props: any) {
    return (
        <>
            <Navbar />
            <main className="">
                {React.cloneElement(props.children)}
            </main>
            <Footer />
        </>
    )
}
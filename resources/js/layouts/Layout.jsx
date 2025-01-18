import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="pc-container">
                <div className="pc-content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;

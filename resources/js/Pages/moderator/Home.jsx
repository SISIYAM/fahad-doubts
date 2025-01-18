import React from "react";
import Layout from "@/layouts/Layout";
function Home() {
    return (
        <div>
            <h1>This is moderator home</h1>
        </div>
    );
}

Home.layout = (page) => <Layout children={page} />;

export default Home;

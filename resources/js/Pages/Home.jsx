import { Link } from "@inertiajs/react";
import React from "react";

function Home({ aboutUrl }) {
    return (
        <div>
            <h1>This is home page</h1>
            <Link href={aboutUrl}>About page</Link>
        </div>
    );
}

export default Home;

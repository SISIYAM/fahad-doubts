import { Link } from "@inertiajs/react";
import React from "react";

function About({ homeUrl }) {
    return (
        <div>
            <h1>This is about page</h1>
            <Link href={homeUrl}>Back to home</Link>
        </div>
    );
}

export default About;

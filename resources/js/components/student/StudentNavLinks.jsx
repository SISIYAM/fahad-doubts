import { Link } from "@inertiajs/react";
import React from "react";
import { route } from "ziggy-js";

function StudentNavLinks() {
    return (
        <>
            <li className="pc-item">
                <Link href={route("dashboard")} className="pc-link">
                    <span className="pc-micon">
                        <i className="ti ti-home" />
                    </span>
                    <span className="pc-mtext" data-i18n="Dashboard">
                        Dashboard
                    </span>
                </Link>
            </li>
            <li className="pc-item">
                <Link
                    href={route("student.post.doubt")}
                    className="pc-link"
                    target="_blank"
                >
                    <span className="pc-micon">
                        <i className="ti ti-plus" />
                    </span>
                    <span className="pc-mtext" data-i18n=" Post Doubts">
                        Post Doubts
                    </span>
                </Link>
            </li>
            <li className="pc-item">
                <Link
                    href={route("student.explore.doubt")}
                    className="pc-link"
                    target="_blank"
                >
                    <span className="pc-micon">
                        <i className="ti ti-search" />
                    </span>
                    <span className="pc-mtext" data-i18n=" Explore Doubts">
                        Explore Doubts
                    </span>
                </Link>
            </li>
        </>
    );
}

export default StudentNavLinks;

import { Link } from "@inertiajs/react";
import React from "react";
import { route } from "ziggy-js";

function ModeratorNavLink() {
    return (
        <>
            <li className="pc-item">
                <Link href={route("dashboard")} className="pc-link">
                    <span className="pc-micon">
                        <i className="ti ti-home" />
                    </span>
                    <span className="pc-mtext" data-i18n="Dashboard">
                        Moderator
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
                        <i className="ti ti-lock" />
                    </span>
                    <span className="pc-mtext" data-i18n="Lock Doubts">
                        Post Doubts
                    </span>
                </Link>
            </li>
            <li className="pc-item">
                <a href="#!" className="pc-link" target="_blank">
                    <span className="pc-micon">
                        <i className="ti ti-search" />
                    </span>
                    <span className="pc-mtext" data-i18n="Browse Doubts">
                        Explore Doubts
                    </span>
                </a>
            </li>
            <li className="pc-item">
                <a href="#!" className="pc-link" target="_blank">
                    <span className="pc-micon">
                        <i className="ti ti-search" />
                    </span>
                    <span className="pc-mtext" data-i18n="Browse Doubts">
                        Solvers
                    </span>
                </a>
            </li>
        </>
    );
}

export default ModeratorNavLink;

import { Link } from "@inertiajs/react";
import React from "react";

function AdminNavLink() {
    return (
        <>
            <li className="pc-item">
                <Link href={route("admin.add.class")} className="pc-link">
                    <span className="pc-micon">
                        <i className="ti ti-home" />
                    </span>
                    <span className="pc-mtext" data-i18n="Dashboard">
                        Manage Class
                    </span>
                </Link>
            </li>
            <li className="pc-item">
                <Link href={route("admin.add.subject")} className="pc-link">
                    <span className="pc-micon">
                        <i className="ti ti-home" />
                    </span>
                    <span className="pc-mtext" data-i18n="Dashboard">
                        Manage Subjects
                    </span>
                </Link>
            </li>
            <li className="pc-item">
                <Link href={route("admin.add.chapter")} className="pc-link">
                    <span className="pc-micon">
                        <i className="ti ti-home" />
                    </span>
                    <span className="pc-mtext" data-i18n="Dashboard">
                        Manage Chapters
                    </span>
                </Link>
            </li>
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
                <a href="#!" className="pc-link" target="_blank">
                    <span className="pc-micon">
                        <i className="ti ti-lock" />
                    </span>
                    <span className="pc-mtext" data-i18n="Lock Doubts">
                        Post Doubts
                    </span>
                </a>
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
            <li className="pc-item">
                <a href="#!" className="pc-link" target="_blank">
                    <span className="pc-micon">
                        <i className="ti ti-search" />
                    </span>
                    <span className="pc-mtext" data-i18n="Browse Doubts">
                        Users
                    </span>
                </a>
            </li>
            <li className="pc-item">
                <a href="#!" className="pc-link" target="_blank">
                    <span className="pc-micon">
                        <i className="ti ti-search" />
                    </span>
                    <span className="pc-mtext" data-i18n="Browse Doubts">
                        Moderators
                    </span>
                </a>
            </li>
        </>
    );
}

export default AdminNavLink;

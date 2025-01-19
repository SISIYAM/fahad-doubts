import { Link } from "@inertiajs/react";
import React from "react";

function SolverNavLinks() {
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
                    href={route("solver.locked.doubt")}
                    className="pc-link"
                    target="_blank"
                >
                    <span className="pc-micon">
                        <i className="ti ti-lock" />
                    </span>
                    <span className="pc-mtext" data-i18n="Lock Doubts">
                        Lock Doubts
                    </span>
                </Link>
            </li>
            <li className="pc-item">
                <Link
                    href={route("solver.browse.doubt")}
                    className="pc-link"
                    target="_blank"
                >
                    <span className="pc-micon">
                        <i className="ti ti-search" />
                    </span>
                    <span className="pc-mtext" data-i18n="Browse Doubts">
                        Browse Doubts
                    </span>
                </Link>
            </li>
        </>
    );
}

export default SolverNavLinks;

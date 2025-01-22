import { Link } from "@inertiajs/react";
import React from "react";
import { route } from "ziggy-js";

function AdminNavLink() {
    return (
        <>
            <div>
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
                        href={route("admin.manage.solver")}
                        className="pc-link"
                    >
                        <span className="pc-micon">
                            <svg className="pc-icon">
                                <use xlinkHref="#custom-user" />
                            </svg>
                        </span>
                        <span className="pc-mtext" data-i18n="Solver">
                            Solver
                        </span>
                    </Link>
                </li>
                <li className="pc-item">
                    <Link
                        href={route("admin.manage.moderator")}
                        className="pc-link"
                    >
                        <span className="pc-micon">
                            <svg className="pc-icon">
                                <use xlinkHref="#custom-security-safe" />
                            </svg>
                        </span>
                        <span className="pc-mtext" data-i18n="Mod Admin">
                            Mod Admin
                        </span>
                    </Link>
                </li>
                <li className="pc-item">
                    <Link
                        href={route("admin.manage.matrials")}
                        className="pc-link"
                    >
                        <span className="pc-micon">
                            <svg className="pc-icon">
                                <use xlinkHref="#custom-keyboard" />
                            </svg>
                        </span>
                        <span className="pc-mtext" data-i18n="Materials">
                            Materials
                        </span>
                    </Link>
                </li>
            </div>
        </>
    );
}

export default AdminNavLink;

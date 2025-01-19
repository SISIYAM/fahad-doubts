import { Link } from "@inertiajs/react";
import React from "react";
import { route } from "ziggy-js";

function AdminNavLink() {
    return (
        <>
            <div>
                <li className="pc-item">
                    <a href="./solver.html" className="pc-link">
                        <span className="pc-micon">
                            <svg className="pc-icon">
                                <use xlinkHref="#custom-user" />
                            </svg>
                        </span>
                        <span className="pc-mtext" data-i18n="Solver">
                            Solver
                        </span>
                    </a>
                </li>
                <li className="pc-item">
                    <a href="./modadmin.html" className="pc-link">
                        <span className="pc-micon">
                            <svg className="pc-icon">
                                <use xlinkHref="#custom-security-safe" />
                            </svg>
                        </span>
                        <span className="pc-mtext" data-i18n="Mod Admin">
                            Mod Admin
                        </span>
                    </a>
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

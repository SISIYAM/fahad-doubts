import React from "react";
import { timeAgo } from "../helper/Helper";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

function RecentDoubtCard({
    className,
    subject,
    chapter,
    status,
    text,
    image,
    audio,
    created_at,
    student,
    assetsUrl,
    slug,
}) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h6 style={{ fontSize: "10px" }} className="mb-0">
                            <span>{className ? className : "Undefined"}</span>
                            <i className="ti ti-chevron-right" />
                            <span>{subject ? subject : "Undefined"}</span>
                            <i className="ti ti-chevron-right" />
                            <span>{chapter ? chapter : "Undefined"}</span>
                        </h6>
                        {status === 0 ? (
                            <span className="badge bg-danger">Locked</span>
                        ) : status === 1 ? (
                            <span className="badge bg-warning">Unsolved</span>
                        ) : status === 2 ? (
                            <span className="badge bg-success">Solved</span>
                        ) : null}
                    </div>
                    <p className="mt-4">{text}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                            {timeAgo(created_at)}
                        </small>
                        <Link
                            href={route("student.doubt.details", slug)}
                            className="btn btn-light btn-sm"
                            style={{
                                backgroundColor: "#174267",
                                color: "white",
                            }}
                        >
                            See Response
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentDoubtCard;

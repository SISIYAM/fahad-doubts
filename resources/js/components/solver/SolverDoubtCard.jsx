import React from "react";
import { timeAgo } from "@/helper/Helper";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
function SolverDoubtCard({
    class_name,
    subject,
    chapter,
    status,
    text,
    image,
    audio,
    created_at,
    student,
    slug,
    assetsUrl,
}) {
    return (
        <div className="col-12 col-md-4">
            <Link href={route("solver.doubt.details", slug)}>
                <div className="card" style={{ backgroundColor: "#174267" }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center ">
                            <div>
                                <h5
                                    className="text-white d-flex align-items-center flex-wrap gap-1"
                                    style={{ textAlign: "center" }}
                                >
                                    <span>
                                        {class_name ? class_name : "Undefined"}
                                    </span>
                                    <i className="ti ti-chevron-right" />
                                    <span>
                                        {subject ? subject : "Undefined"}
                                    </span>
                                    <i className="ti ti-chevron-right" />
                                    <span>
                                        {chapter ? chapter : "Undefined"}
                                    </span>
                                </h5>
                            </div>
                            <div>
                                {status === 0 ? (
                                    <span
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                        className="badge bg-danger"
                                    >
                                        Locked
                                    </span>
                                ) : status === 1 ? (
                                    <span
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                        className="badge bg-warning"
                                    >
                                        Unsolved
                                    </span>
                                ) : status === 2 ? (
                                    <span
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                        className="badge bg-success"
                                    >
                                        Solved
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <hr style={{ color: "#FFE81C" }} id="specialhr" />
                        <div className="row">
                            <div>
                                <div className="p-4 d-flex flex-column align-items-center gap-4">
                                    <p className="text-white">{text}</p>
                                    {audio && (
                                        <div className="audio-wrapper d-inline-block me-2 mb-2">
                                            <audio
                                                src={`${assetsUrl}/${audio}`}
                                                controls
                                                className="d-block"
                                            />
                                        </div>
                                    )}
                                    {image && (
                                        <img
                                            src={`${assetsUrl}/${image}`}
                                            alt
                                            className="img-fluid mb-1"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="ti ti-user text-white" />
                                    <p className="text-white mb-0">Student</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="ti ti-clock text-white" />
                                    <p className="text-white mb-0">
                                        {timeAgo(created_at)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SolverDoubtCard;

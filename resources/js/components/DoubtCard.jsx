import React from "react";
import { timeAgo } from "../helper/Helper";
function DoubtCard({
    className,
    subject,
    chapter,
    status,
    text,
    image,
    audio,
    created_at,
    student,
}) {
    return (
        <div className="col-12 col-md-4">
            <div className="card" style={{ backgroundColor: "#174267" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div>
                            <h5
                                className="text-white d-flex align-items-center flex-wrap gap-1"
                                style={{ textAlign: "center" }}
                            >
                                <span>
                                    {className ? className : "Undefined"}
                                </span>
                                <i className="ti ti-chevron-right" />
                                <span>{subject ? subject : "Undefined"}</span>
                                <i className="ti ti-chevron-right" />
                                <span>{chapter ? chapter : "Undefined"}</span>
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
                                    Deactivated
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
                            ) : (
                                <span
                                    style={{
                                        padding: "5px 20px",
                                        borderRadius: 9,
                                    }}
                                    className="badge bg-success"
                                >
                                    Solved
                                </span>
                            )}
                        </div>
                    </div>
                    <hr style={{ color: "#FFE81C" }} id="specialhr" />
                    <div className="row">
                        <div>
                            <div className="p-4 d-flex flex-column align-items-center gap-4">
                                <p className="text-white">{text}</p>
                                <img
                                    src={image}
                                    alt
                                    className="img-fluid mb-1"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <i className="ti ti-user text-white" />
                                <p className="text-white mb-0">{student}</p>
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
        </div>
    );
}

export default DoubtCard;

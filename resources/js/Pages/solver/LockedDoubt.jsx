import React from "react";
import Layout from "@/layouts/Layout";

function LockedDoubt() {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div
                        className="card"
                        style={{ backgroundColor: "#174267" }}
                    >
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center ">
                                <div>
                                    <h5
                                        className="text-white d-flex align-items-center flex-wrap gap-1"
                                        style={{ textAlign: "center" }}
                                    >
                                        <span>Class</span>{" "}
                                        <i className="ti ti-chevron-right" />{" "}
                                        <span>Subject</span>{" "}
                                        <i className="ti ti-chevron-right" />{" "}
                                        <span>Chapter</span>
                                    </h5>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-danger"
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                    >
                                        Locked
                                    </button>
                                </div>
                            </div>
                            <hr style={{ color: "#FFE81C" }} id="specialhr" />
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Ipsam
                                            aut hic dignissimos sapiente ab
                                            nostrum, eveniet provident corrupti
                                            saepe enim.
                                        </p>
                                        <img
                                            src="https://dummyimage.com/600x400/000/fff"
                                            alt
                                            className="img-fluid mb-1"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ti ti-user text-white" />
                                        <p className="text-white mb-0">
                                            Username
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ti ti-clock text-white" />
                                        <p className="text-white mb-0">
                                            1 hour ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

LockedDoubt.layout = (page) => <Layout children={page} />;
export default LockedDoubt;

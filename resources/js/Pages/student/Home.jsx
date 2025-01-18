import React from "react";
import Layout from "@/layouts/Layout";
function Home() {
    return (
        <>
            <div>
                <div className="row">
                    <div className="position-relative">
                        <div className="text-center mt-3">
                            <div className="chat-avtar d-inline-flex mx-auto">
                                <img
                                    className="rounded-circle img-fluid wid-100"
                                    src="../assets/images/user/avatar-5.jpg"
                                    alt="User image"
                                />
                            </div>
                            <h3 className="mb-2 mt-3">Ahmmed Imtiaz</h3>
                            <h5 className="text-muted mb-2">
                                Class 11 | Science
                            </h5>
                            {/* <h5 class="text-muted d-inline rounded" style="background-color: rgb(255, 198, 198); padding: 5px;">PCMB | HSC 26 Cycle 02</h5> */}
                            <h5 className="text-muted">Southeast University</h5>
                            {/* Edit Profile Button */}
                            <button className="btn btn-outline-warning mt-2">
                                Edit Profile
                            </button>
                            <hr className="my-3 border border-secondary-subtle" />
                        </div>
                    </div>
                </div>
                {/* New Row for Statistics */}
                <div className="row mt-4">
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Total Posted Doubts
                                </h5>
                                <p className="card-text">120</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Total Solved Doubts
                                </h5>
                                <p className="card-text">85</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Total Unsolved Doubts
                                </h5>
                                <p className="card-text">35</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Recent Doubts</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="mb-0">
                                                        <span>Subject</span>
                                                        <i className="ti ti-chevron-right" />
                                                        <span>Chapter</span>
                                                    </h5>
                                                    <span className="badge bg-danger">
                                                        Unsolved
                                                    </span>
                                                </div>
                                                <p className="mt-4">
                                                    Can someone explain the
                                                    concept of double integrals
                                                    in a simple way?
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">
                                                        5 minutes ago
                                                    </small>
                                                    <button
                                                        className="btn btn-light btn-sm"
                                                        style={{
                                                            backgroundColor:
                                                                "#174267",
                                                            color: "white",
                                                        }}
                                                    >
                                                        Respond
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="mb-0">
                                                        <span>Subject</span>
                                                        <i className="ti ti-chevron-right" />
                                                        <span>Chapter</span>
                                                    </h5>
                                                    <span className="badge bg-danger">
                                                        Unsolved
                                                    </span>
                                                </div>
                                                <p className="mt-4">
                                                    What are the three laws of
                                                    motion formulated by Newton?
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">
                                                        10 minutes ago
                                                    </small>
                                                    <button
                                                        className="btn btn-light btn-sm"
                                                        style={{
                                                            backgroundColor:
                                                                "#174267",
                                                            color: "white",
                                                        }}
                                                    >
                                                        Respond
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="mb-0">
                                                        <span>Subject</span>
                                                        <i className="ti ti-chevron-right" />
                                                        <span>Chapter</span>
                                                    </h5>
                                                    <span className="badge bg-success">
                                                        Solved
                                                    </span>
                                                </div>
                                                <p className="mt-4">
                                                    Can you help me understand
                                                    the structure of organic
                                                    compounds?
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">
                                                        15 minutes ago
                                                    </small>
                                                    <button
                                                        className="btn btn-light btn-sm"
                                                        style={{
                                                            backgroundColor:
                                                                "#174267",
                                                            color: "white",
                                                        }}
                                                    >
                                                        Respond
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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

Home.layout = (page) => <Layout children={page} />;

export default Home;

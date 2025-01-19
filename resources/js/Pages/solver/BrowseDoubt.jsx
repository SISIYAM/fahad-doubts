import React from "react";
import Layout from "@/layouts/Layout";

function BrowseDoubt() {
    return (
        <>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-5 row">
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Your Class
                                </label>
                                <select
                                    className="form-control"
                                    name="selectClass"
                                    id="selectClass"
                                    required
                                >
                                    <option label="select" />
                                    <option>Class 9</option>
                                    <option>Class 10</option>
                                    <option>Class 11</option>
                                    <option>Class 12</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Subject
                                </label>
                                <select
                                    className="form-control"
                                    name="selectSubject"
                                    id="selectSubject"
                                    required
                                >
                                    <option label="select" />
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Chapter
                                </label>
                                <select
                                    className="form-control"
                                    name="selectChapter"
                                    id="selectChapter"
                                    required
                                >
                                    <option label="select" />
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        className="btn btn-success"
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                    >
                                        Solved
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
                                        className="btn btn-success"
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                    >
                                        Solved
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

BrowseDoubt.layout = (page) => <Layout children={page} />;
export default BrowseDoubt;

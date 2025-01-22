import React from "react";
import Layout from "@/layouts/Layout";
import AddSolverTab from "./components/AddSolverTab";

function ManageSolver() {
    return (
        <>
            <div className="row">
                {/* [ sample-page ] start */}
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body py-0">
                            <ul
                                className="nav nav-tabs profile-tabs"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="list-1"
                                        data-bs-toggle="tab"
                                        href="#list"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-user me-2" />
                                        Solver List
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="add-1"
                                        data-bs-toggle="tab"
                                        href="#add"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-file-text me-2" />
                                        Add Solver
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="approve-1"
                                        data-bs-toggle="tab"
                                        href="#approve"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-file-text me-2" />
                                        Approve Solver
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div
                            className="tab-pane show active"
                            id="list"
                            role="tabpanel"
                            aria-labelledby="list-1"
                        >
                            <AddSolverTab />
                        </div>
                        <div
                            className="tab-pane"
                            id="add"
                            role="tabpanel"
                            aria-labelledby="add-1"
                        ></div>
                        <div
                            className="tab-pane"
                            id="approve"
                            role="tabpanel"
                            aria-labelledby="approve-1"
                        ></div>
                    </div>
                </div>
                {/* [ sample-page ] end */}
            </div>
        </>
    );
}

ManageSolver.layout = (page) => <Layout children={page} />;
export default ManageSolver;

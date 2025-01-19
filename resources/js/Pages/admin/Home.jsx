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
                            <h5 className="text-muted mb-2">Admin</h5>
                            {/* Edit Profile Button */}
                            <hr className="my-3 border border-secondary-subtle" />
                        </div>
                    </div>
                </div>
                {/* New Row for Statistics */}
                <div className="row mt-4">
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Total Students</h5>
                                <p className="card-text">120</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Total Doubts</h5>
                                <p className="card-text">85</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Total Solver</h5>
                                <p className="card-text">85</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
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
            </div>
        </>
    );
}

Home.layout = (page) => <Layout children={page} />;

export default Home;

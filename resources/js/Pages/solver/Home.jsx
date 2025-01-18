import { Link, usePage } from "@inertiajs/react";
import React from "react";

import Layout from "@/layouts/Layout";

function Home() {
    const { auth } = usePage().props;
    const role = auth?.user?.role;

    return (
        <>
            {/* [ Main Content ] start */}
            <div className="row">
                <div className="col-12 col-md-6">
                    <div
                        className="card"
                        style={{ backgroundColor: "#FF8016" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <h1 className="text-white">0</h1>
                                        <h2 className="text-white mb-0">
                                            Solved this month
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div
                        className="card"
                        style={{ backgroundColor: "#FF8016" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <h1 className="text-white">0</h1>
                                        <h2 className="text-white mb-0">
                                            Credit this month
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div
                        className="card"
                        style={{ backgroundColor: "#FF8016" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <h1 className="text-white">0</h1>
                                        <h2 className="text-white mb-0">
                                            Total Solved
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div
                        className="card"
                        style={{ backgroundColor: "#FF8016" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <h1 className="text-white">0</h1>
                                        <h2 className="text-white mb-0">
                                            Total Solved
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ Main Content ] end */}
        </>
    );
}

Home.layout = (page) => <Layout children={page} />;

export default Home;

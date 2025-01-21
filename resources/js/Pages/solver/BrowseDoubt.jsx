import React from "react";
import Layout from "@/layouts/Layout";
import SolverDoubtCard from "@/components/solver/SolverDoubtCard";

function BrowseDoubt({ doubts, env }) {
    const assetsUrl = env.ASSETS_URL;

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
                {doubts.length > 0
                    ? doubts.map((doubt) => (
                          <SolverDoubtCard
                              class_name={doubt?.class?.name}
                              subject={doubt?.subject?.name}
                              chapter={doubt?.chapter?.name}
                              status={doubt?.status}
                              text={doubt?.text}
                              image={doubt?.image}
                              audio={doubt?.audio}
                              assetsUrl={assetsUrl}
                              created_at={doubt?.created_at}
                              student={doubt?.student?.name}
                              slug={doubt?.slug}
                          />
                      ))
                    : ""}
            </div>
        </>
    );
}

BrowseDoubt.layout = (page) => <Layout children={page} />;
export default BrowseDoubt;

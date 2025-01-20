import React from "react";
import Layout from "@/layouts/Layout";
import DoubtCard from "../../components/DoubtCard";
import { timeAgo } from "../../helper/Helper";
import UserComment from "../../components/comment/UserComment";
import SolverComment from "../../components/comment/SolverComment";
import CommentForm from "../../components/comment/CommentForm";

function SolveDetails({ auth, doubtDetails, env }) {
    const assetsUrl = env.ASSETS_URL;

    return (
        <>
            <div className="row">
                <DoubtCard
                    className={doubtDetails?.class?.name}
                    subject={doubtDetails?.subject?.name}
                    chapter={doubtDetails?.chapter?.name}
                    status={doubtDetails?.status}
                    text={doubtDetails?.text}
                    image={doubtDetails?.image}
                    audio={doubtDetails?.audio}
                    assetsUrl={assetsUrl}
                    created_at={doubtDetails?.created_at}
                    student={doubtDetails?.student?.name}
                    slug={doubtDetails?.slug}
                />
                <div className="col-12 col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center flex-wrap ">
                                <div>
                                    <h3
                                        style={{
                                            color: "#174267",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Solution
                                    </h3>
                                </div>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                    <button
                                        type="button"
                                        className="btn btn-danger d-inline-flex align-items-center"
                                    >
                                        <i className="ti ti-alert-triangle me-2" />{" "}
                                        Report
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                {doubtDetails.status == 2 ? (
                                    <>
                                        <div>
                                            <div className="p-4 d-flex flex-column align-items-center gap-4">
                                                <p className="text-black">
                                                    {
                                                        doubtDetails?.solution
                                                            ?.text
                                                    }
                                                </p>
                                                <img
                                                    src={`${assetsUrl}/${doubtDetails?.solution?.image}`}
                                                    alt={
                                                        doubtDetails?.solution
                                                            ?.id
                                                    }
                                                    className="img-fluid mb-1"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex flex-wrap align-items-center">
                                                <b className="mb-0 me-3 text-dark ">
                                                    Solved
                                                </b>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="ti ti-clock text-black" />
                                                <p className="text-black mb-0">
                                                    {timeAgo(
                                                        doubtDetails?.solution
                                                            ?.created_at
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="alert alert-danger">
                                        No solution Added yet!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h3>Comments</h3>
                        <hr />
                        {doubtDetails?.comments.length > 0 &&
                            doubtDetails?.comments.map((comment) =>
                                comment?.user?.role === "student" ? (
                                    <UserComment
                                        key={comment.id}
                                        text={comment?.text}
                                        assetsUrl={assetsUrl}
                                        image={comment?.image}
                                        audio={comment.audio}
                                    />
                                ) : (
                                    <SolverComment
                                        key={comment.id}
                                        text={comment?.text}
                                        assetsUrl={assetsUrl}
                                        image={comment?.image}
                                        audio={comment.audio}
                                    />
                                )
                            )}
                    </div>
                </div>
            </div>

            {auth?.user?.id == doubtDetails?.student?.id && <CommentForm />}

            {/* [ Main Content ] end */}
        </>
    );
}

SolveDetails.layout = (page) => <Layout children={page} />;
export default SolveDetails;

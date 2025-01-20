import React from "react";
import Layout from "@/layouts/Layout";
import DoubtCard from "../../components/DoubtCard";
import { timeAgo } from "../../helper/Helper";
import UserComment from "../../components/comment/UserComment";
import SolverComment from "../../components/comment/SolverComment";

function SolveDetails({ doubtDetails, env }) {
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
                    image={`${assetsUrl}/${doubtDetails?.image}`}
                    audio={`${assetsUrl}/${doubtDetails?.audio}`}
                    created_at={doubtDetails?.created_at}
                    student={doubtDetails?.student?.name}
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
            <div className="row">
                <div className="card shadow-sm col-12 col-md-12">
                    <div className="card-body">
                        <div
                            id="image-preview-container"
                            className="card-body mt-3 d-flex flex-wrap"
                            style={{ gap: 10 }}
                        ></div>
                        <div className="card-footer py-2 px-3">
                            <textarea
                                className="form-control border-0 shadow-none"
                                placeholder="Type a Message"
                                rows={4}
                                defaultValue={""}
                            />
                            <hr className="my-2" />
                            <div className="d-sm-flex align-items-center justify-content-end">
                                <div
                                    id="audio-preview-container"
                                    className="mt-3"
                                />
                                <div className="d-flex align-items-center flex-wrap ms-auto">
                                    {/* Upload image */}
                                    <a
                                        href="#!"
                                        id="post-image"
                                        className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <i className="ti ti-photo f-18 me-1" />
                                    </a>
                                    <input
                                        type="file"
                                        id="image-upload"
                                        accept="image/*"
                                        multiple
                                        style={{ display: "none" }}
                                    />
                                    {/* Voice record */}
                                    <div
                                        id="voice-controls"
                                        className="d-flex align-items-center"
                                    >
                                        <a
                                            href="#!"
                                            id="start-recording"
                                            className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            <i className="ti ti-microphone f-18 me-1" />
                                        </a>
                                        <div
                                            id="recording-controls"
                                            className="d-none mx-2"
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            <button
                                                id="stop-recording"
                                                className="btn btn-danger btn-sm"
                                            >
                                                Stop
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-dark shadow-sm"
                                            style={{
                                                width: "100%",
                                                maxWidth: 150,
                                            }}
                                        >
                                            Post
                                        </button>
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

SolveDetails.layout = (page) => <Layout children={page} />;
export default SolveDetails;

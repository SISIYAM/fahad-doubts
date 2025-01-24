import React, { useEffect } from "react";
import Layout from "@/layouts/Layout";
import DoubtCard from "@/components/DoubtCard";
import { timeAgo } from "@/helper/Helper";
import UserComment from "@/components/comment/UserComment";
import SolverComment from "@/components/comment/SolverComment";
import CommentForm from "@/components/comment/CommentForm";
import { toast, ToastContainer } from "react-toastify";
import SatisfiedBtn from "@/components/student/SatisfiedBtn";
import ReportBtn from "@/components/student/ReportBtn";
import PaidUserMessage from "../../components/PaidUserMessage";

function SolveDetails({ auth, doubtDetails, env, flash, errors }) {
    const assetsUrl = env.ASSETS_URL;

    useEffect(() => {
        // show success message
        if (flash.success) {
            toast.success(flash.success);

            flash.success = null;
        }

        // Show error message
        if (flash.error) {
            toast.error(flash.error);
            flash.error = null;
        }

        if (errors) {
            Object.values(errors).forEach((error) => {
                toast.error(error);
            });
            errors = null;
        }
    }, [flash, errors]);

    return (
        <>
            <ToastContainer />
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
                                    <ReportBtn
                                        doubtDetails={doubtDetails}
                                        user={auth?.user}
                                    />
                                    <SatisfiedBtn
                                        user={auth?.user}
                                        solution_id={doubtDetails?.solve?.id}
                                        doubtDetails={doubtDetails}
                                        isSatisfied={
                                            doubtDetails?.solve?.isSatisfied
                                        }
                                    />
                                </div>
                            </div>

                            <hr />
                            {auth?.user?.isVerified == 1 ? (
                                <div className="row">
                                    {doubtDetails.status == 2 ? (
                                        <>
                                            <div>
                                                <div className="p-4 d-flex flex-column align-items-center gap-4">
                                                    <p className="text-black">
                                                        {
                                                            doubtDetails?.solve
                                                                ?.text
                                                        }
                                                    </p>
                                                    {doubtDetails?.solve
                                                        ?.image && (
                                                        <img
                                                            src={`${assetsUrl}/${doubtDetails?.solve?.image}`}
                                                            alt={
                                                                doubtDetails
                                                                    ?.solve?.id
                                                            }
                                                            className="img-fluid mb-1"
                                                        />
                                                    )}
                                                </div>
                                                {doubtDetails?.solve?.audio && (
                                                    <div className="audio-wrapper d-inline-block me-2 mb-2">
                                                        <audio
                                                            src={`${assetsUrl}/${doubtDetails?.solve?.audio}`}
                                                            controls
                                                            className="d-block"
                                                        />
                                                    </div>
                                                )}
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
                                                            doubtDetails?.solve
                                                                ?.created_at
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="alert alert-danger">
                                            No solution added yet!
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <PaidUserMessage />
                            )}
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

            {auth?.user?.id == doubtDetails?.student?.id && (
                <CommentForm user={auth?.user} doubt={doubtDetails} />
            )}

            {/* [ Main Content ] end */}
        </>
    );
}

SolveDetails.layout = (page) => <Layout children={page} />;
export default SolveDetails;

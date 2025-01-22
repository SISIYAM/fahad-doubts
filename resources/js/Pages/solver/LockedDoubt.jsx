import React from "react";
import Layout from "@/layouts/Layout";
import SolverDoubtCard from "@/components/solver/SolverDoubtCard";
import PaidUserMessage from "../../components/PaidUserMessage";

function LockedDoubt({ doubts, env }) {
    const assetsUrl = env.ASSETS_URL;
    return (
        <>
            <div className="row">
                {doubts.length > 0 ? (
                    doubts.map((doubt) => (
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
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#ffe0e0",
                            border: "1px solid #ff4d4f",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            color: "#ff4d4f",
                            fontFamily:
                                "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        }}
                    >
                        <div>
                            <h3
                                style={{
                                    margin: "0 0 8px 0",
                                    fontWeight: "600",
                                }}
                            >
                                No Locked Doubts Found!
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

LockedDoubt.layout = (page) => <Layout children={page} />;
export default LockedDoubt;

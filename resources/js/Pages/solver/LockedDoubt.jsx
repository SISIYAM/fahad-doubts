import React from "react";
import Layout from "@/layouts/Layout";
import SolverDoubtCard from "@/components/solver/SolverDoubtCard";

function LockedDoubt({ doubts, env }) {
    const assetsUrl = env.ASSETS_URL;
    return (
        <>
            <div className="row">
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

LockedDoubt.layout = (page) => <Layout children={page} />;
export default LockedDoubt;

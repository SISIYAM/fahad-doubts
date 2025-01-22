import React from "react";
import Layout from "@/layouts/Layout";
import RecentDoubtCard from "../../components/RecentDoubtCard";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
function Home({ auth, doubts, env }) {
    // get logged in users info
    const name = auth?.user?.name;
    const email = auth?.user?.email;
    const mobile = auth?.user?.mobile;
    const institue = auth?.user?.institue;
    const StudentClass = auth?.user?.class;
    const group = auth?.user?.group;
    const assetsUrl = env.ASSETS_URL;

    // count solved and unsolved doubts
    const solvedDoubts = doubts.filter((doubt) => doubt.status == "2").length;
    // count unsolved doubts
    const unsolvedDoubts = doubts.filter((doubt) => doubt.status == "1").length;

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
                            <h3 className="mb-2 mt-3">{name}</h3>
                            <p>{email}</p>
                            <p>{mobile}</p>
                            <h5 className="text-muted mb-2">
                                {StudentClass} {group && `| ${group}`}
                            </h5>
                            {/* <h5 class="text-muted d-inline rounded" style="background-color: rgb(255, 198, 198); padding: 5px;">PCMB | HSC 26 Cycle 02</h5> */}
                            <h5 className="text-muted">{institue}</h5>
                            {/* Edit Profile Button */}
                            <Link
                                href={route("student.profile")}
                                className="btn btn-outline-warning mt-2"
                            >
                                Edit Profile
                            </Link>
                            <hr className="my-3 border border-secondary-subtle" />
                        </div>
                    </div>
                </div>
                {/* New Row for Statistics */}
                <div className="row mt-4">
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Total Posted Doubts
                                </h5>
                                <p className="card-text">{doubts.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Total Solved Doubts
                                </h5>
                                <p className="card-text">{solvedDoubts}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Total Unsolved Doubts
                                </h5>
                                <p className="card-text">{unsolvedDoubts}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Recent Doubts</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {doubts.length > 0
                                        ? doubts.map((doubt) => (
                                              <RecentDoubtCard
                                                  className={doubt?.class?.name}
                                                  subject={doubt?.subject?.name}
                                                  chapter={doubt?.chapter?.name}
                                                  status={doubt?.status}
                                                  text={doubt?.text}
                                                  image={doubt?.image}
                                                  audio={doubt?.audio}
                                                  created_at={doubt?.created_at}
                                                  student={doubt?.student?.name}
                                                  assetsUrl={assetsUrl}
                                                  slug={doubt?.slug}
                                              />
                                          ))
                                        : ""}
                                </div>
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

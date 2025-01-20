import React from "react";
import Layout from "@/layouts/Layout";
import RecentDoubtCard from "../../components/RecentDoubtCard";
function Home({ auth, doubts, env }) {
    // get logged in users info
    const name = auth?.user?.name;
    const email = auth?.user?.email;
    const assetsUrl = env.ASSETS_URL;
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
                            <h5 className="text-muted mb-2">
                                Class 11 | Science
                            </h5>
                            {/* <h5 class="text-muted d-inline rounded" style="background-color: rgb(255, 198, 198); padding: 5px;">PCMB | HSC 26 Cycle 02</h5> */}
                            <h5 className="text-muted">Southeast University</h5>
                            {/* Edit Profile Button */}
                            <button className="btn btn-outline-warning mt-2">
                                Edit Profile
                            </button>
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
                                <p className="card-text">85</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
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
                                                  image={`${assetsUrl}/${doubt?.image}`}
                                                  audio={`${assetsUrl}/${doubt?.audio}`}
                                                  created_at={doubt?.created_at}
                                                  student={doubt?.student?.name}
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

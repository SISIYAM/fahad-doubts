import React from "react";

function AddModeratorTab() {
    return (
        <div className="auth-main">
            <div className="auth-wrapper v1">
                <div className="auth-form">
                    <div className="card my-5">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <a href="#!">
                                    <img
                                        src="/assets/images/ftlogo.png"
                                        alt="img"
                                    />
                                </a>
                            </div>
                            <h3 className="text-center f-w-500 mb-4">
                                <b>Add Modmin</b>
                            </h3>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                    name="category"
                                    id="category"
                                    className="form-control"
                                    data-trigger
                                >
                                    <option value="None">Category</option>
                                    <option value="Accounting">Admin</option>
                                    <option value="Others">Moderator</option>
                                </select>
                            </div>
                            <div className="d-grid mt-4">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Add Modmin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModeratorTab;

import React from "react";

function SetPassword({ props }) {
    const { message, user_id, error_message } = props;
    return (
        <div className="auth-main">
            <div className="auth-wrapper v1">
                <div className="auth-form">
                    <div className="card my-5">
                        <div className="card-body">
                            <div className="text-center">
                                <a href="#">
                                    <img
                                        src="/assets/images/ftlogo.png"
                                        alt="img"
                                    />
                                </a>
                            </div>
                            <h4 className="text-center f-w-500 mb-4 mt-4">
                                Set Your Account Password
                            </h4>
                            {message && (
                                <p className="alert alert-success">{message}</p>
                            )}
                            {error_message && (
                                <p className="alert alert-danger">
                                    {error_message}
                                </p>
                            )}
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="d-flex mt-1 justify-content-between">
                                <div className="form-check">
                                    <input
                                        className="form-check-input input-primary"
                                        type="checkbox"
                                        id="customCheckc1"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label text-muted"
                                        htmlFor="customCheckc1"
                                    >
                                        I agree to all the Terms &amp; Condition
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid mt-4">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetPassword;

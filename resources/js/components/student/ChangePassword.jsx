import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

function ChangePassword({ user }) {
    const { data, setData, post, processing, errors } = useForm({
        user_id: user.id,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [passwordMatchError, setPasswordMatchError] = useState("");

    // handle form field change
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the new password matches the confirm password
        if (data.newPassword !== data.confirmPassword) {
            setPasswordMatchError(
                "New password and confirm password must be the same."
            );
            return;
        }

        setPasswordMatchError("");

        post(route("execute.change.password"), data);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5>Change Password</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">
                                        Old Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="oldPassword"
                                        value={data.oldPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.oldPassword && (
                                        <span className="text-danger">
                                            {errors.oldPassword}
                                        </span>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="newPassword"
                                        value={data.newPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.newPassword && (
                                        <span className="text-danger">
                                            {errors.newPassword}
                                        </span>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        value={data.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {passwordMatchError && (
                                        <span className="text-danger">
                                            {passwordMatchError}
                                        </span>
                                    )}
                                    {errors.confirmPassword && (
                                        <span className="text-danger">
                                            {errors.confirmPassword}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h5>New password must contain:</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                        At least 8 characters
                                    </li>
                                    <li className="list-group-item">
                                        <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                        At least 1 lowercase letter (a-z)
                                    </li>
                                    <li className="list-group-item">
                                        <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                        At least 1 uppercase letter (A-Z)
                                    </li>
                                    <li className="list-group-item">
                                        <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                        At least 1 number (0-9)
                                    </li>
                                    <li className="list-group-item">
                                        <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                        At least 1 special character
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer text-end btn-page">
                            <div className="btn btn-outline-secondary">
                                Cancel
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? (
                                    <span className="spinner-border spinner-border-sm" />
                                ) : (
                                    "Update Password"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;

import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { route } from "ziggy-js";

function ForgotPassword({ flash, errors }) {
    const { data, setData, post, processing } = useForm({
        mobile: "",
    });

    const [error, setError] = useState({ mobile: "" });

    const validateMobile = (mobile) => {
        const regex = /^01[0-9]{9}$/;
        if (!mobile) {
            setError({ ...error, mobile: "Mobile number is required." });
            return false;
        } else if (!regex.test(mobile)) {
            setError({
                ...error,
                mobile: "Mobile number must start with '01' and have 11 digits.",
            });
            return false;
        }
        setError({ ...error, mobile: "" });
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === "mobile") {
            validateMobile(value);
        }
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateMobile(data.mobile)) {
            post(route("execute.forgot.password"));
        }
        return;
    };

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
            <div className="auth-main">
                <div className="auth-wrapper v1">
                    <div className="auth-form">
                        <div className="card my-5">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center mb-4">
                                    <a href="#">
                                        <img
                                            src="/assets/images/ftlogo.png"
                                            className="mb-3"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">
                                        Enter Your Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control mt-2"
                                        id="floatingInput"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={data.mobile}
                                        onChange={handleChange}
                                    />
                                    {error.mobile && (
                                        <div className="text-danger mt-2">
                                            {error.mobile}
                                        </div>
                                    )}
                                </div>
                                <div className="d-grid mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                        disabled={processing}
                                    >
                                        {processing ? "Processing" : "Get OTP"}
                                    </button>
                                </div>
                                <div className="d-flex justify-content-between align-items-end mt-4">
                                    <h6 className="f-w-500 mb-0">
                                        Remember Your Password?
                                    </h6>
                                    <Link
                                        href={route("auth.login")}
                                        className="link-primary"
                                    >
                                        Login here
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;

import { useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";

function OtpPage({ props, flash, errors }) {
    // destruct props
    const { message, user_id, error_message } = props;

    const [otp, setOtp] = useState(["", "", "", ""]);
    const { data, setData, post, processing } = useForm({ otp: "", user_id });
    const otpForm = useRef(null);

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join("");
        data.otp = otpCode;
        post(route("verify.otp"), data);
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
        <div className="auth-main">
            <ToastContainer />
            <div className="auth-wrapper v1">
                <div className="auth-form">
                    <div className="card my-5">
                        <div className="card-body">
                            <div className="mb-4">
                                <div className="d-flex flex-column align-items-center mb-3">
                                    <a href="#">
                                        <img
                                            src="/assets/images/ftlogo.png"
                                            className="mb-4"
                                            alt="img"
                                        />
                                    </a>
                                    <h3>
                                        <b>Enter Verification Code</b>
                                    </h3>
                                </div>
                                {message && (
                                    <p className="alert alert-success">
                                        {message}
                                    </p>
                                )}
                                {error_message && (
                                    <p className="alert alert-danger">
                                        {error_message}
                                    </p>
                                )}
                            </div>
                            <form
                                ref={otpForm}
                                onSubmit={handleSubmit}
                                className="d-flex justify-content-center my-4"
                            >
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-input-${index}`}
                                        type="text"
                                        className="form-control text-center code-input mx-1"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) =>
                                            handleChange(e.target.value, index)
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            fontSize: "20px",
                                            textAlign: "center",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                        }}
                                    />
                                ))}
                            </form>
                            <div className="d-grid mt-4">
                                <button
                                    type="button" // Ensure it's not type="submit" to avoid duplicate form submission
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                    disabled={processing}
                                >
                                    {processing ? "Processing..." : "Proceed"}
                                </button>
                            </div>
                            <div className="d-flex justify-content-start align-items-end mt-3">
                                <p className="mb-0">
                                    Did not receive the code?
                                </p>
                                <a href="#" className="link-primary ms-2">
                                    Resend code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpPage;

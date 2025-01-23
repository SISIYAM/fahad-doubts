import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

function NewPassword({ props, errors, flash }) {
    const { message, error_message } = props;
    const [validatePassword, setValidatePassword] = useState(false);
    // save user_id into cookie
    useEffect(() => {
        const userId = props?.user_id;
        if (userId) {
            // save user_id in a cookie for 10 minutes
            Cookies.set("user_id", userId, { expires: 10 / 1440 });
        }
    }, [props.session]);

    // Retrieve user_id from the cookie
    let user_id = Cookies.get("user_id");

    if (!user_id) {
        user_id = "timeout";
    }

    const { data, setData, post, processing } = useForm({
        user_id: "",
        password: "",
        confirm_password: "",
    });

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.password != data.confirm_password) {
            setValidatePassword(true);
            return;
        }
        setValidatePassword(false);
        data.user_id = user_id;
        post(route("execute.set.new.password"), data);
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
                                    name="password"
                                    value={data.value}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    name="confirm_password"
                                    value={data.value}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                />
                                <small style={{ color: "red" }}>
                                    {validatePassword &&
                                        "Password and confirm password are not matched. Both must be the same."}
                                </small>
                            </div>

                            <div className="d-grid mt-4">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                    disabled={processing}
                                >
                                    {processing ? "Processing..." : "Signup"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;

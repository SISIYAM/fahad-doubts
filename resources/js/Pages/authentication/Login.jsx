import { Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRoute } from "ziggy-js";

const Login = ({ flash, errors }) => {
    const route = useRoute();
    const [values, setValues] = useState({
        login: "",
        password: "",
    });
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("execute.auth.login"), values);
    }

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
                            <form onSubmit={handleSubmit}>
                                <div className="text-center">
                                    <a href="#">
                                        <img
                                            src="/assets/images/ftlogo.png"
                                            alt="Logo"
                                        />
                                    </a>
                                </div>
                                <div className="saprator my-3"></div>
                                <h4 className="text-center f-w-500 mb-3">
                                    Login in to your account
                                </h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="login"
                                        className="form-control"
                                        placeholder="Enter Mobile Number or Email"
                                        value={values.login}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="d-flex mt-1 justify-content-between align-items-center">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input input-primary"
                                            type="checkbox"
                                            id="customCheckc1"
                                        />
                                        <label
                                            class="form-check-label text-muted"
                                            for="customCheckc1"
                                        >
                                            Remember me?
                                        </label>
                                    </div>
                                    <h6 class="text-secondary f-w-400 mb-0">
                                        <Link
                                            href={route("auth.forgot.password")}
                                        >
                                            {" "}
                                            Forgot Password?{" "}
                                        </Link>
                                    </h6>
                                </div>
                                <div className="d-grid mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-end mt-4">
                                    <h6 class="f-w-500 mb-0">
                                        Don't have an Account?
                                    </h6>
                                    <Link
                                        href={route("auth.registration.form")}
                                        class="link-primary"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

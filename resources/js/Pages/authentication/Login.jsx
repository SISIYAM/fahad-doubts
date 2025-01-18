import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const Login = ({ flash, executeLogin, errors }) => {
    const [values, setValues] = useState({
        email: "",
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
        router.post(executeLogin, values);
    }
    console.log(values);
    return (
        <div className="auth-main">
            <div className="auth-wrapper v2">
                <div className="auth-sidecontent">
                    <img
                        src="/assets/images/img-auth-sideimg.jpg"
                        alt="Authentication Side"
                        className="img-fluid img-auth-side"
                    />
                </div>
                <Link href="/">Redirect to home</Link>
                <div className="auth-form">
                    <div className="card my-5">
                        {flash.error && (
                            <div
                                class="alert alert-danger alert-dismissible fade show"
                                role="alert"
                            >
                                {flash.error}
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            </div>
                        )}
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
                                    Login with your email
                                </h4>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        value={values.email}
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
                                <div className="d-grid mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
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

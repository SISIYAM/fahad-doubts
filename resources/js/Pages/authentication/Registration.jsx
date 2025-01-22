import { Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { route } from "ziggy-js";

function Registration({ flash, errors, classes }) {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        email: "",
        mobile: "",
        institue: "",
        class: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("execute.auth.registration"), {
            onSuccess: () => {
                reset();
                // setData({
                //     name: "",
                //     email: "",
                //     mobile: "",
                //     institue: "",
                //     class: "",
                // });
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
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
                        <form onSubmit={handleSubmit}>
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
                                    Create Your Account
                                </h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={data.mobile}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="institue"
                                        value={data.institue}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Your School / College Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="class"
                                        className="form-select"
                                        id="classSelect"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    >
                                        <option value={""}>
                                            Select your class
                                        </option>
                                        {classes.length > 0 ? (
                                            classes.map((classItem) => (
                                                <option
                                                    key={classItem.id}
                                                    value={classItem.name}
                                                >
                                                    {classItem.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>
                                                No classes available
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="d-grid mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Processing..."
                                            : "Proceed"}
                                    </button>
                                </div>
                                <div className="d-flex justify-content-between align-items-end mt-4">
                                    <h6 className="f-w-500 mb-0">
                                        Already have an Account?
                                    </h6>
                                    <Link
                                        href={route("auth.login")}
                                        className="link-primary"
                                    >
                                        Login here
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;

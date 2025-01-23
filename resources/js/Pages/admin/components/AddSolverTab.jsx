import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { route } from "ziggy-js";

function AddSolverTab({ universities, departments }) {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        email: "",
        mobile: "",
        institue: "",
        solver_department: "",
    });

    const [mobileError, setMobileError] = useState("");

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "mobile") {
            const mobileRegex = /^01\d{9}$/;
            if (!mobileRegex.test(value)) {
                setMobileError(
                    "Mobile number must start with 01 and be 11 digits."
                );
            } else {
                setMobileError("");
            }
        }

        setData(name, value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Prevent submission if mobile number is invalid
        if (mobileError) return;

        post(route("admin.add.solver"), {
            onSuccess: () => {},
        });
    };

    return (
        <>
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
                                    <b>Add Solver</b>
                                </h3>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Full Name"
                                        value={data.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        name="mobile"
                                        value={data.mobile}
                                        onChange={handleChange}
                                    />
                                    {mobileError && (
                                        <small className="text-danger">
                                            {mobileError}
                                        </small>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="institue"
                                        className="form-control"
                                        value={data.institue}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Select University
                                        </option>
                                        {universities.length > 0 ? (
                                            universities.map(
                                                (university, index) => (
                                                    <option
                                                        key={index}
                                                        value={university.name}
                                                    >
                                                        {university.name}
                                                    </option>
                                                )
                                            )
                                        ) : (
                                            <option value="">
                                                No university found
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="solver_department"
                                        className="form-control"
                                        value={data.solver_department}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Select Department
                                        </option>
                                        {departments.length > 0 ? (
                                            departments.map(
                                                (department, index) => (
                                                    <option
                                                        key={index}
                                                        value={department.name}
                                                    >
                                                        {department.name}
                                                    </option>
                                                )
                                            )
                                        ) : (
                                            <option value="">
                                                No department found
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="d-grid mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Processing"
                                            : "Add Solver"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddSolverTab;

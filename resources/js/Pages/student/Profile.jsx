import React, { useEffect } from "react";
import Layout from "@/layouts/Layout";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { toast, ToastContainer } from "react-toastify";

function Profile({ auth, classes, doubts, flash, errors }) {
    const user_id = auth.user.id;
    const name = auth.user.name;
    const email = auth.user.email;
    const mobile = auth.user.mobile;
    const studentClass = auth.user.class;
    const institue = auth.user.institue;
    const group = auth.user.group;

    const { data, setData, post, processing } = useForm({
        user_id,
        name,
        email,
        mobile,
        studentClass,
        institue,
        group,
    });

    // handle input field change
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("student.update.profile"), data);
    };

    // count solved and unsolved doubts
    const solvedDoubts = doubts.filter((doubt) => doubt.status == "2").length;
    // count unsolved doubts
    const unsolvedDoubts = doubts.filter((doubt) => doubt.status == "1").length;

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
            <ToastContainer />

            {/* [ Main Content ] start */}
            <div className="row">
                {/* [ sample-page ] start */}
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body py-0">
                            <ul
                                className="nav nav-tabs profile-tabs"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="profile-tab-1"
                                        data-bs-toggle="tab"
                                        href="#profile-1"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-user me-2" />
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="profile-tab-4"
                                        data-bs-toggle="tab"
                                        href="#profile-4"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-lock me-2" />
                                        Change Password
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div
                            className="tab-pane show active"
                            id="profile-1"
                            role="tabpanel"
                            aria-labelledby="profile-tab-1"
                        >
                            <div className="row">
                                <div className="col-lg-4 col-xxl-3">
                                    <div className="card">
                                        <div className="card-body position-relative">
                                            <div className="position-absolute end-0 top-0 p-3">
                                                <span className="badge bg-primary">
                                                    Student
                                                </span>
                                            </div>
                                            <div className="text-center mt-3">
                                                <div className="chat-avtar d-inline-flex mx-auto">
                                                    <img
                                                        className="rounded-circle img-fluid wid-70"
                                                        src="/assets/images/user/avatar-5.jpg"
                                                        alt="User image"
                                                    />
                                                </div>
                                                <h5 className="mb-1">{name}</h5>
                                                <p className="text-muted text-sm">
                                                    {studentClass}{" "}
                                                    {group && `| ${group}`}
                                                </p>
                                                <hr className="my-3 border border-secondary-subtle" />
                                                <div className="row g-3">
                                                    <div className="col-4">
                                                        <h5 className="mb-0">
                                                            {doubts.length}
                                                        </h5>
                                                        <small className="text-muted">
                                                            Post
                                                        </small>
                                                    </div>
                                                    <div className="col-4 border border-top-0 border-bottom-0">
                                                        <h5 className="mb-0">
                                                            {solvedDoubts}
                                                        </h5>
                                                        <small className="text-muted">
                                                            Solved
                                                        </small>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5 className="mb-0">
                                                            {unsolvedDoubts}
                                                        </h5>
                                                        <small className="text-muted">
                                                            Unsolved
                                                        </small>
                                                    </div>
                                                </div>
                                                <hr className="my-3 border border-secondary-subtle" />
                                                <div className="d-inline-flex align-items-center justify-content-start w-100 mb-3">
                                                    <i className="ti ti-home me-2" />
                                                    <p className="mb-0">
                                                        {institue
                                                            ? institue
                                                            : "None"}
                                                    </p>
                                                </div>
                                                <div className="d-inline-flex align-items-center justify-content-start w-100 mb-3">
                                                    <i className="ti ti-mail me-2" />
                                                    <p className="mb-0">
                                                        {email}
                                                    </p>
                                                </div>
                                                <div className="d-inline-flex align-items-center justify-content-start w-100">
                                                    <i className="ti ti-phone me-2" />
                                                    <p className="mb-0">
                                                        {mobile}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xxl-9">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Personal Information</h5>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-12 text-center mb-3">
                                                        <div className="user-upload wid-75">
                                                            <img
                                                                src="/assets/images/user/avatar-4.jpg"
                                                                alt="img"
                                                                className="img-fluid"
                                                            />
                                                            <label
                                                                htmlFor="uplfile"
                                                                className="img-avtar-upload"
                                                            >
                                                                <i className="ti ti-camera f-24 mb-1" />
                                                                <span>
                                                                    Upload
                                                                </span>
                                                            </label>
                                                            {/* <input
                                                            type="file"
                                                            id="uplfile"
                                                            className="d-none"
                                                        /> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                value={
                                                                    data.name
                                                                }
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Class
                                                            </label>
                                                            <select
                                                                name="studentClass"
                                                                className="form-control"
                                                                value={
                                                                    data.studentClass
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            >
                                                                {classes.map(
                                                                    (
                                                                        classItem
                                                                    ) => (
                                                                        <option
                                                                            key={
                                                                                classItem.id
                                                                            }
                                                                            value={
                                                                                classItem.name
                                                                            }
                                                                            selected={
                                                                                classItem.name ==
                                                                                studentClass
                                                                            }
                                                                        >
                                                                            {
                                                                                classItem.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Group
                                                            </label>
                                                            <select
                                                                name="group"
                                                                className="form-control"
                                                                value={
                                                                    data.group
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            >
                                                                <option value="none">
                                                                    None
                                                                </option>
                                                                <option value="science">
                                                                    Science
                                                                </option>
                                                                <option value="commerce">
                                                                    Commerce
                                                                </option>
                                                                <option value="arts">
                                                                    Arts
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Phone Number
                                                            </label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="mobile"
                                                                value={
                                                                    data.mobile
                                                                }
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                value={
                                                                    data.email
                                                                }
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                College
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="institue"
                                                                value={
                                                                    data.institue
                                                                }
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
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
                                                    {processing
                                                        ? "Processing"
                                                        : "Update Profile"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane"
                            id="profile-4"
                            role="tabpanel"
                            aria-labelledby="profile-tab-4"
                        >
                            <div className="card">
                                <div className="card-header">
                                    <h5>Change Password</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Old Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                />
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
                                                    At least 1 lower letter
                                                    (a-z)
                                                </li>
                                                <li className="list-group-item">
                                                    <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                                    At least 1 uppercase
                                                    letter(A-Z)
                                                </li>
                                                <li className="list-group-item">
                                                    <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                                    At least 1 number (0-9)
                                                </li>
                                                <li className="list-group-item">
                                                    <i className="ti ti-circle-check text-success f-16 me-2" />{" "}
                                                    At least 1 special
                                                    characters
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-end btn-page">
                                    <div className="btn btn-outline-secondary">
                                        Cancel
                                    </div>
                                    <div className="btn btn-primary">
                                        Update Profile
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ sample-page ] end */}
            </div>
            {/* [ Main Content ] end */}
        </>
    );
}

Profile.layout = (page) => <Layout children={page} />;

export default Profile;

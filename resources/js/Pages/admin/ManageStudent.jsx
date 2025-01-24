import React, { useEffect } from "react";
import Layout from "@/layouts/Layout";
import { toast, ToastContainer } from "react-toastify";
import StudentList from "./components/StudentList";
import ApprovedStudentList from "./components/ApprovedStudentList";

function ManageStudent({ students, flash, errors }) {
    const approvedStudents = students.filter(
        (student) => student.isVerified == 1
    );

    useEffect(() => {
        // Show success message
        if (flash.success) {
            toast.success(flash.success);
        }

        // Show warning message
        if (flash.warning) {
            toast.warning(flash.warning);
        }

        // Show error message
        if (flash.error) {
            toast.error(flash.error);
        }

        // Show validation errors
        if (errors) {
            Object.values(errors).forEach((error) => {
                toast.error(error);
            });
        }
    }, [flash, errors]);

    return (
        <>
            <ToastContainer />
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
                                        id="list-1"
                                        data-bs-toggle="tab"
                                        href="#list"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-user me-2" />
                                        Students List
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="add-1"
                                        data-bs-toggle="tab"
                                        href="#add"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-file-text me-2" />
                                        Approved Students
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="approve-1"
                                        data-bs-toggle="tab"
                                        href="#approve"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-file-text me-2" />
                                        Deactivate Students
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div
                            className="tab-pane show active"
                            id="list"
                            role="tabpanel"
                            aria-labelledby="list-1"
                        >
                            <StudentList students={students} />
                        </div>
                        <div
                            className="tab-pane"
                            id="add"
                            role="tabpanel"
                            aria-labelledby="add-1"
                        >
                            <ApprovedStudentList students={approvedStudents} />
                        </div>
                        <div
                            className="tab-pane"
                            id="approve"
                            role="tabpanel"
                            aria-labelledby="approve-1"
                        ></div>
                    </div>
                </div>
                {/* [ sample-page ] end */}
            </div>
        </>
    );
}

ManageStudent.layout = (page) => <Layout children={page} />;
export default ManageStudent;

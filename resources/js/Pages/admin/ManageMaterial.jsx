import React, { useEffect } from "react";
import Layout from "@/layouts/Layout";

import { toast, ToastContainer } from "react-toastify";
import ClassTab from "./components/ClassTab";
import SubjectTab from "./components/SubjectTab";
import ChapterTab from "./components/ChapterTab";

function ManageMaterial({ flash, errors, classes, subjects, chapters }) {
    useEffect(() => {
        // Show success message
        if (flash.success) {
            toast.success(flash.success);
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
                                        id="class-1"
                                        data-bs-toggle="tab"
                                        href="#class"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-user me-2" />
                                        Add Classes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="subject-1"
                                        data-bs-toggle="tab"
                                        href="#subject"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-file-text me-2" />
                                        Add Subjects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="chapter-1"
                                        data-bs-toggle="tab"
                                        href="#chapter"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-file-text me-2" />
                                        Add Chapters
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <ClassTab classes={classes} />
                        <SubjectTab classes={classes} subjects={subjects} />
                        <ChapterTab
                            classes={classes}
                            subjects={subjects}
                            chapters={chapters}
                        />
                    </div>
                </div>
                {/* [ sample-page ] end */}
            </div>
        </>
    );
}

ManageMaterial.layout = (page) => <Layout children={page} />;
export default ManageMaterial;

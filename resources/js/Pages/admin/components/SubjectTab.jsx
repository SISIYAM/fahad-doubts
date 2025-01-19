import React from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

function SubjectTab({ classes, subjects }) {
    const { data, setData, post, progress } = useForm({
        name: "",
        class_id: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("admin.execute.add.subject"), {
            onSuccess: () => {
                setData("name", "");
            },
        });
    }

    return (
        <>
            <div
                className="tab-pane"
                id="subject"
                role="tabpanel"
                aria-labelledby="subject-1"
            >
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Add Subjects</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Select Class
                                                </label>
                                                <select
                                                    className="form-control"
                                                    data-trigger
                                                    id="choices-single-default"
                                                    name="class_id"
                                                    value={data.class_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "class_id",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="" disabled>
                                                        Select Class
                                                    </option>
                                                    {Array.isArray(classes) &&
                                                        classes.map(
                                                            (classItem) => (
                                                                <option
                                                                    key={
                                                                        classItem.id
                                                                    }
                                                                    value={
                                                                        classItem.id
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
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Subject Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Subject name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-end">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* [ basic-table ] start */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Subject List</h5>
                            </div>
                            <div className="card-body table-border-style">
                                <div className="table-responsive">
                                    <table className="table" id="pc-dt-simple">
                                        <thead>
                                            <tr>
                                                <th>Class Name</th>
                                                <th>Subject Name</th>
                                                <th>Created By</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subjects.length > 0 &&
                                                subjects.map(
                                                    (subject, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                {
                                                                    subject
                                                                        .class
                                                                        .name
                                                                }
                                                            </td>
                                                            <td>
                                                                {subject.name}
                                                            </td>
                                                            <td>
                                                                {
                                                                    subject
                                                                        .author
                                                                        .name
                                                                }
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="#"
                                                                    class="avtar avtar-xs btn-link-secondary"
                                                                >
                                                                    <i class="ti ti-eye f-20"></i>
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="avtar avtar-xs btn-link-secondary"
                                                                >
                                                                    <i class="ti ti-edit f-20"></i>
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="avtar avtar-xs btn-link-secondary"
                                                                >
                                                                    <i class="ti ti-trash f-20"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* [ basic-table ] end */}
                </div>
            </div>
        </>
    );
}

export default SubjectTab;

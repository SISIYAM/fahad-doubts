import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";

DataTable.use(DT);

function ChapterTab({ classes, subjects, chapters }) {
    const { data, setData, post, progress } = useForm({
        name: "",
        class_id: "",
        subject_id: "",
    });

    const [filteredSubjects, setFilteredSubjects] = useState([]);

    const handleClassChange = (e) => {
        const selectedClassId = e.target.value;
        setData("class_id", selectedClassId);

        // filter subjects based on the selected class
        const filtered = subjects.filter(
            (subject) => subject.class_id === selectedClassId
        );
        setFilteredSubjects(filtered);
    };

    function submit(e) {
        e.preventDefault();
        post(route("admin.execute.add.chapter"), {
            onSuccess: () => {
                setData("name", "");
            },
        });
    }

    return (
        <>
            <div
                className="tab-pane"
                id="chapter"
                role="tabpanel"
                aria-labelledby="chapter-1"
            >
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Add Chapters</h5>
                            </div>
                            <div className="card-body">
                                <form
                                    action="#"
                                    method="post"
                                    encType="multipart/form-data"
                                    onSubmit={submit}
                                >
                                    <div className="row">
                                        <div className="col-md-4">
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
                                                    onChange={handleClassChange}
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
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Select Subject
                                                </label>
                                                <select
                                                    className="form-control"
                                                    data-trigger
                                                    name="subject_id"
                                                    id="choices-single-default"
                                                    value={data.subject_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "subject_id",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Subject
                                                    </option>
                                                    {filteredSubjects.map(
                                                        (subject) => (
                                                            <option
                                                                key={subject.id}
                                                                value={
                                                                    subject.id
                                                                }
                                                            >
                                                                {subject.name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Chapter Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Enter Chapter Name"
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
                                <h5>Chapter List</h5>
                            </div>
                            <div className="card-body table-border-style">
                                <div className="table-responsive">
                                    <DataTable className="table">
                                        <thead>
                                            <tr>
                                                <th>Class Name</th>
                                                <th>Subject Name</th>
                                                <th>Chapter Name</th>
                                                <th>Created By</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chapters.map((chapter) => (
                                                <tr key={chapter.id}>
                                                    <td>
                                                        {
                                                            chapter.subject
                                                                .class.name
                                                        }
                                                    </td>
                                                    <td>
                                                        {chapter.subject.name}
                                                    </td>
                                                    <td>{chapter.name}</td>
                                                    <td>
                                                        {chapter.author.name}
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#"
                                                            className="avtar avtar-xs btn-link-secondary"
                                                        >
                                                            <i className="ti ti-eye f-20" />
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="avtar avtar-xs btn-link-secondary"
                                                        >
                                                            <i className="ti ti-edit f-20" />
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="avtar avtar-xs btn-link-secondary"
                                                        >
                                                            <i className="ti ti-trash f-20" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </DataTable>
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

export default ChapterTab;

import React from "react";
import Layout from "@/layouts/Layout";

function ManageChapter() {
    return (
        <>
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
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Subject Name
                                            </label>
                                            <select
                                                className="form-control"
                                                data-trigger
                                                name
                                                id="choices-single-default"
                                            >
                                                <option value="Class-9">
                                                    Bangla
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Chapter Name
                                            </label>
                                            <input
                                                type="text"
                                                name
                                                className="form-control"
                                                placeholder="Enter Subject name"
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
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Class 9</td>
                                            <td>Bangla</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Class 9</td>
                                            <td>English</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Class 10</td>
                                            <td>Math</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Class 10</td>
                                            <td>Physics</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Class 10</td>
                                            <td>Physics</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ basic-table ] end */}
            </div>
        </>
    );
}

ManageChapter.layout = (page) => <Layout children={page} />;
export default ManageChapter;

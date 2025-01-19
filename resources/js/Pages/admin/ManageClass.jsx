import React, { useEffect } from "react";
import Layout from "@/layouts/Layout";
import { useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ToastContainer, toast } from "react-toastify";

function ManageClass() {
    const { flash, errors } = usePage().props;

    const { data, setData, post, progress } = useForm({
        name: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("admin.execute.add.class"));
    }

    // Show success message
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

    // Show success message
    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash.error]);

    // Show validation errors
    useEffect(() => {
        if (errors) {
            Object.values(errors).forEach((error) => {
                toast.error(error);
            });
        }
    }, [errors]);

    return (
        <>
            <ToastContainer />
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Add Class</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Class Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Enter Class name"
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
                                        <div>
                                            {progress && (
                                                <progress
                                                    value={progress.percentage}
                                                    max="100"
                                                >
                                                    {progress.percentage}%
                                                </progress>
                                            )}
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
                                <h5>Class List</h5>
                            </div>
                            <div className="card-body table-border-style">
                                <div className="table-responsive">
                                    <table className="table" id="pc-dt-simple">
                                        <thead>
                                            <tr>
                                                <th>Class Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Class 9</td>
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
            </div>
        </>
    );
}

ManageClass.layout = (page) => <Layout children={page} />;
export default ManageClass;

import React, { useEffect } from "react";
import Layout from "@/layouts/Layout";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ToastContainer, toast } from "react-toastify";

function ManageClass({ flash, errors, classes }) {
    const { data, setData, post, progress } = useForm({
        name: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("admin.execute.add.class"), {
            onSuccess: () => {
                setData("name", "");
            },
        });
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
                                            {classes.length > 0 &&
                                                classes.map(
                                                    (classItem, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                {classItem.name}
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

ManageClass.layout = (page) => <Layout children={page} />;
export default ManageClass;

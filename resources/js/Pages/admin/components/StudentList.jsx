import React from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import Swal from "sweetalert2";

import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";

DataTable.use(DT);

function StudentList({ students }) {
    const { data, setData, post } = useForm({
        user_id: "",
        status: "",
        isVerified: "",
    });

    // Function to handle status change
    const handleStatusChange = (student, status) => {
        data.user_id = student.id;
        data.status = status;

        const action = status === 1 ? "activate" : "deactivate";

        Swal.fire({
            title: `Are you sure?`,
            text: `You are about to ${action} this student. This action cannot be undone!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${action} it!`,
        }).then((result) => {
            if (result.isConfirmed) {
                post(route("admin.update.user.status"), data);
            }
        });
    };

    // handle approve student
    const handleApproveStudent = (student, isVerified) => {
        data.user_id = student.id;
        data.isVerified = isVerified;

        const action = isVerified === 1 ? "Approve" : "Decline";

        Swal.fire({
            title: `Are you sure?`,
            text: `You are about to ${action} this student.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${action} it!`,
        }).then((result) => {
            if (result.isConfirmed) {
                post(route("admin.approve.student"), data);
            }
        });
    };

    return (
        <>
            <div
                className="tab-pane show active"
                id="class"
                role="tabpanel"
                aria-labelledby="class-1"
            >
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Student List</h5>
                            </div>
                            <div className="card-body table-border-style">
                                <div className="table-responsive">
                                    <DataTable className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Institute</th>
                                                <th>Department</th>
                                                <th>Waiting Approval</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {students.length > 0 &&
                                                students.map(
                                                    (student, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                {student?.name}
                                                            </td>
                                                            <td>
                                                                {student?.email}
                                                            </td>
                                                            <td>
                                                                {
                                                                    student?.mobile
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    student?.institue
                                                                }
                                                            </td>
                                                            <td>
                                                                {student?.class}
                                                            </td>
                                                            <td>
                                                                {student.isVerified !=
                                                                1 ? (
                                                                    <span
                                                                        style={{
                                                                            cursor: "pointer",
                                                                        }}
                                                                        className="avtar avtar-xs btn-link-secondary"
                                                                        onClick={() =>
                                                                            handleApproveStudent(
                                                                                student,
                                                                                1
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="ti ti-check f-20"></i>
                                                                    </span>
                                                                ) : null}
                                                            </td>
                                                            <td className="d-flex justify-center">
                                                                <span
                                                                    style={{
                                                                        cursor: "pointer",
                                                                    }}
                                                                    className="avtar avtar-xs btn-link-secondary"
                                                                >
                                                                    <i className="ti ti-eye f-20"></i>
                                                                </span>

                                                                {student.status ==
                                                                1 ? (
                                                                    <span
                                                                        style={{
                                                                            cursor: "pointer",
                                                                        }}
                                                                        className="avtar avtar-xs btn-link-secondary"
                                                                        onClick={() =>
                                                                            handleStatusChange(
                                                                                student,
                                                                                0
                                                                            )
                                                                        }
                                                                    >
                                                                        <i
                                                                            className={`fas fa-circle text-success f-20`}
                                                                        ></i>
                                                                    </span>
                                                                ) : (
                                                                    <span
                                                                        style={{
                                                                            cursor: "pointer",
                                                                        }}
                                                                        className="avtar avtar-xs btn-link-secondary"
                                                                        onClick={() =>
                                                                            handleStatusChange(
                                                                                student,
                                                                                1
                                                                            )
                                                                        }
                                                                    >
                                                                        <i
                                                                            className={`fas fa-circle text-warning f-20`}
                                                                        ></i>
                                                                    </span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                        </tbody>
                                    </DataTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentList;

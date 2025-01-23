import React from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import Swal from "sweetalert2";

import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";

DataTable.use(DT);

function SolverList({ solvers }) {
    const { data, setData, post } = useForm({
        user_id: "",
        status: "",
    });

    // Function to handle status change
    const handleStatusChange = (solver, status) => {
        data.user_id = solver.id;
        data.status = status;

        const action = status === 1 ? "activate" : "deactivate";
        const actionConfirm = status === 1 ? "activated" : "deactivated";

        Swal.fire({
            title: `Are you sure?`,
            text: `You are about to ${action} this solver. This action cannot be undone!`,
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
                                <h5>Solvers List</h5>
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
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {solvers.length > 0 &&
                                                solvers.map((solver, index) => (
                                                    <tr key={index}>
                                                        <td>{solver?.name}</td>
                                                        <td>{solver?.email}</td>
                                                        <td>
                                                            {solver?.mobile}
                                                        </td>
                                                        <td>
                                                            {solver?.institue}
                                                        </td>
                                                        <td>
                                                            {
                                                                solver?.solver_department
                                                            }
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                className="avtar avtar-xs btn-link-secondary"
                                                            >
                                                                <i className="ti ti-eye f-20"></i>
                                                            </a>

                                                            {solver.status ==
                                                            1 ? (
                                                                <button
                                                                    className="avtar avtar-xs btn-link-secondary"
                                                                    onClick={() =>
                                                                        handleStatusChange(
                                                                            solver,
                                                                            0
                                                                        )
                                                                    }
                                                                >
                                                                    <i
                                                                        className={`fas fa-circle text-success f-20`}
                                                                    ></i>
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    className="avtar avtar-xs btn-link-secondary"
                                                                    onClick={() =>
                                                                        handleStatusChange(
                                                                            solver,
                                                                            1
                                                                        )
                                                                    }
                                                                >
                                                                    <i
                                                                        className={`fas fa-circle text-warning f-20`}
                                                                    ></i>
                                                                </button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
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

export default SolverList;

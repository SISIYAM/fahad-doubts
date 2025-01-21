import { useForm } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";
import { route } from "ziggy-js";

function ReportBtn({ doubtDetails, user }) {
    const solution_id = doubtDetails?.solve?.id;
    const solver_id = doubtDetails?.solve?.solver_id;
    const isReported = doubtDetails?.solve?.isReported;
    const user_id = user.id;
    const slug = doubtDetails?.slug;
    const doubt_id = doubtDetails?.id;

    const { data, setData, post, reset } = useForm({
        doubt_id,
        slug,
        solve_id: solution_id,
        solver_id,
        student_id: user_id,
        text: "",
    });

    const handleReport = async () => {
        Swal.fire({
            title: "Report an Issue",
            text: "Please provide details about the issue you're reporting:",
            input: "textarea",
            inputPlaceholder: "Describe the issue here...",
            inputAttributes: {
                "aria-label": "Describe the issue",
            },
            showCancelButton: true,
            confirmButtonText: "Submit Report",
            cancelButtonText: "Cancel",
            showLoaderOnConfirm: true,
            preConfirm: async (description) => {
                if (!description) {
                    Swal.showValidationMessage(
                        "You need to provide a description!"
                    );
                    return;
                }
                data.text = description;
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                post(route("execute.student.report"), data, {
                    onSuccess: () => {
                        reset();
                    },
                });
            }
        });
    };

    return (
        <>
            {isReported == 1 ? (
                <button
                    type="button"
                    className="btn btn-danger d-inline-flex align-items-center"
                >
                    <i className="ti ti-alert-triangle me-2" /> Reported
                </button>
            ) : doubtDetails?.status == 2 &&
              doubtDetails?.user_id == user_id ? (
                <button
                    type="button"
                    className="btn btn-danger d-inline-flex align-items-center"
                    onClick={handleReport}
                >
                    <i className="ti ti-alert-triangle me-2" /> Report
                </button>
            ) : null}
        </>
    );
}

export default ReportBtn;

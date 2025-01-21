import { useForm } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";
import { route } from "ziggy-js";

function SatisfiedBtn({ solution_id, doubtDetails, isSatisfied, user }) {
    const { data, setData, post } = useForm({
        slug: doubtDetails.slug,
        solution_id,
        isSatisfied: "",
    });

    const submit = () => {
        Swal.fire({
            title: "Are you satisfied with this solution?",
            icon: "question",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Satisfied",
            denyButtonText: `Not Satisfied`,
        }).then((result) => {
            if (result.isConfirmed) {
                handleSubmission(1);
            } else if (result.isDenied) {
                handleSubmission(2);
            }
        });
    };

    const handleSubmission = (value) => {
        data.isSatisfied = value;
        post(route("execute.student.satisfaction"), data);
    };

    return (
        <>
            {isSatisfied == 0 && user.id == doubtDetails.user_id ? (
                <button
                    onClick={submit}
                    type="button"
                    className="btn btn-success d-inline-flex align-items-center"
                >
                    <i className="ti ti-check me-2" /> Are you satisfied?
                </button>
            ) : isSatisfied == 1 ? (
                <div className="btn btn-success d-inline-flex align-items-center">
                    <span>Satisfied</span>
                </div>
            ) : isSatisfied == 2 ? (
                <div className="btn btn-warning  d-inline-flex align-items-center">
                    <span>Not Satisfied</span>
                </div>
            ) : null}
        </>
    );
}

export default SatisfiedBtn;

import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

function LockDoubt({ doubt, doubt_id, status, slug, locked_at, user }) {
    const { data, setData, post } = useForm({
        doubt_id,
        status,
        slug,
        difficulty: "1",
    });

    const [timeLeft, setTimeLeft] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (status === 0 && locked_at) {
            const lockedTime = new Date(locked_at).getTime();
            console.log("locked_at:", locked_at);
            console.log("lockedTime:", lockedTime);

            if (isNaN(lockedTime)) {
                console.error("Invalid locked_at date format:", locked_at);
                return;
            }

            // calculate the end time
            const endTime = lockedTime + 60 * 60 * 1000;

            const interval = setInterval(() => {
                const now = Date.now();
                const remainingTime = endTime - now;
                console.log("remainingTime:", remainingTime);

                if (remainingTime <= 0) {
                    clearInterval(interval);
                    setTimeLeft(0);
                    setTimerActive(false);
                } else {
                    setTimeLeft(remainingTime);
                    setTimerActive(true);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [status, locked_at]);

    const formatTime = (timeInMs) => {
        const hours = Math.floor(timeInMs / 3600000);
        const minutes = Math.floor((timeInMs % 3600000) / 60000);
        const seconds = Math.floor((timeInMs % 60000) / 1000);
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("execute.lock.doubt"), data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center gap-3">
                {/* Display timer if doubt is locked */}
                {status === 0 && timerActive && (
                    <div class="countdown-timer bg-danger text-light px-3 py-1 rounded fw-bold fs-5 d-flex align-items-center">
                        <i class="ti ti-clock me-1"></i>
                        <span id="countdown">{formatTime(timeLeft)}</span>
                    </div>
                )}

                {/* If the current user is the one who locked the doubt, show the select box */}
                {doubt.locked_by == user.id && (
                    <>
                        <select
                            className="form-select w-auto"
                            value={data.difficulty}
                            onChange={(e) =>
                                setData("difficulty", e.target.value)
                            }
                        >
                            <option value="1">Easy</option>
                            <option value="2">Medium</option>
                            <option value="3">Hard</option>
                        </select>
                    </>
                )}

                {/* Show Lock button when status is 1 (Unsolved) */}
                {status === 1 && (
                    <button
                        type="submit"
                        className="btn btn-primary d-inline-flex align-items-center"
                        onClick={() => setData("status", 0)}
                    >
                        <i className="ti ti-lock me-2" /> Lock
                    </button>
                )}

                {/* Show Unlock button when status is 0 (Locked) and the current user is the one who locked the doubt */}
                {status === 0 && doubt.locked_by == user.id && (
                    <button
                        type="submit"
                        className="btn btn-warning d-inline-flex align-items-center"
                        onClick={() => setData("status", 1)}
                    >
                        <i className="ti ti-lock me-2" /> Unlock
                    </button>
                )}
            </div>
        </form>
    );
}

export default LockDoubt;

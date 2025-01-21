import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

function LockDoubt({ doubt_id, status, slug, locked_at }) {
    const { data, setData, post } = useForm({
        doubt_id,
        status,
        slug,
    });

    const [timeLeft, setTimeLeft] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (status === 0 && locked_at) {
            // Ensure the locked_at value is parsed correctly
            const lockedTime = new Date(locked_at).getTime();
            console.log("locked_at:", locked_at);
            console.log("lockedTime:", lockedTime);

            // If the lockedTime is invalid, log an error and return
            if (isNaN(lockedTime)) {
                console.error("Invalid locked_at date format:", locked_at);
                return;
            }

            // Calculate the end time (locked_at + 1 hour)
            const endTime = lockedTime + 60 * 60 * 1000; // Add 1 hour to locked_at

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

    // Format the remaining time as HH:mm:ss
    const formatTime = (timeInMs) => {
        const hours = Math.floor(timeInMs / 3600000);
        const minutes = Math.floor((timeInMs % 3600000) / 60000);
        const seconds = Math.floor((timeInMs % 60000) / 1000);
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    // Handle form submission to lock/unlock the doubt
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("execute.lock.doubt"), data);
    };

    return (
        <div className="d-flex justify-content-between align-items-center gap-3">
            {/* Display timer if doubt is locked */}
            {status === 0 && timerActive && (
                <div class="countdown-timer bg-danger text-light px-3 py-1 rounded fw-bold fs-5 d-flex align-items-center">
                    <i class="ti ti-clock me-1"></i>
                    <span id="countdown">{formatTime(timeLeft)}</span>
                </div>
            )}

            <select class="form-select w-auto">
                <option selected value="easy">
                    Easy
                </option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <form onSubmit={handleSubmit}>
                {status === 1 ? (
                    <button
                        type="submit"
                        className="btn btn-primary d-inline-flex align-items-center"
                        onClick={() => setData("status", 0)}
                    >
                        <i className="ti ti-lock me-2" /> Lock
                    </button>
                ) : status === 0 ? (
                    <button
                        type="submit"
                        className="btn btn-warning d-inline-flex align-items-center"
                        onClick={() => setData("status", 1)}
                    >
                        <i className="ti ti-lock me-2" /> Unlock
                    </button>
                ) : null}
            </form>
        </div>
    );
}

export default LockDoubt;

import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

function LockDoubt({ doubt, doubt_id, status, slug, locked_at, user }) {
    const { data, setData, post } = useForm({
        doubt_id,
        status,
        slug,
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
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <div
                                id="countdown-timer"
                                style={{
                                    background: "#DC2626",
                                    color: "#ffffff",
                                    fontWeight: "bold",
                                    padding: "8px 15px",
                                    borderRadius: 12,
                                    fontSize: 20,
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    position: "fixed",
                                    top: 50,
                                    right: "35%",
                                    zIndex: 9999,
                                }}
                            >
                                <span id="timer-display">
                                    {formatTime(timeLeft)}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* If the current user is the one who locked the doubt, show the select box */}

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

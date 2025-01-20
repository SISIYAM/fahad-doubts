import { usePage } from "@inertiajs/react";

const useAuthRoles = () => {
    const { auth } = usePage().props;

    const role = auth?.user?.role;

    const isStudent = () => role === "student";
    const isSolver = () => role === "solver";
    const isModerator = () => role === "moderator";
    const isAdmin = () => role === "admin";

    return { isStudent, isSolver, isModerator, isAdmin };
};

function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const differenceInSeconds = Math.floor((now - past) / 1000);

    const minutes = Math.floor(differenceInSeconds / 60);
    const hours = Math.floor(differenceInSeconds / 3600);
    const days = Math.floor(differenceInSeconds / 86400);
    const months = Math.floor(differenceInSeconds / 2592000);
    const years = Math.floor(differenceInSeconds / 31536000);

    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `${differenceInSeconds} second${
        differenceInSeconds > 1 ? "s" : ""
    } ago`;
}

export default useAuthRoles;

export { timeAgo };

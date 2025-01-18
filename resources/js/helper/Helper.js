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

export default useAuthRoles;

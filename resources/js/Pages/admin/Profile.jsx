import React from "react";
import Layout from "@/layouts/Layout";

function Profile() {
    return <div>This is admin profile</div>;
}

Profile.layout = (page) => <Layout children={page} />;
export default Profile;

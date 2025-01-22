import React from "react";
import Layout from "@/layouts/Layout";

function Profile() {
    return <div>This is solver profile</div>;
}

Profile.layout = (page) => <Layout children={page} />;
export default Profile;

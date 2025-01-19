import { Link } from "@inertiajs/react";
import React from "react";
import { route } from "ziggy-js";

function Forbiddent() {
    return (
        <>
            <div className="maintenance-block">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card error-card">
                                <div className="card-body">
                                    <div className="error-image-block">
                                        <img
                                            className="img-fluid"
                                            src="/assets/images/pages/img-error-404.svg"
                                            alt="Forbidden Access"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h1 className="mt-5">
                                            <b>403 Forbidden</b>
                                        </h1>
                                        <p className="mt-2 mb-4 text-muted">
                                            Sorry, you don't have permission to
                                            access this page. If you believe
                                            this is an error, please contact the
                                            administrator.
                                        </p>

                                        <Link
                                            href={route("dashboard")}
                                            className="btn btn-primary mb-3"
                                        >
                                            Go to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forbiddent;

import React from "react";

function UserComment({ text, image, audio, assetsUrl }) {
    return (
        <div className="card mt-3 me-5 border border-warning border-3">
            <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                    <img
                        className="rounded-circle img-fluid wid-30"
                        src="../assets/images/user/avatar-5.jpg"
                        alt="User image"
                    />
                    <h6 className="ms-2 mb-0">Student</h6>
                </div>

                <div className="my-2">
                    <p className="mb-3">{text}</p>
                    {image && (
                        <img
                            src={`${assetsUrl}/${image}`}
                            alt
                            className="img-fluid mb-1 p-1"
                        />
                    )}
                </div>

                {audio && (
                    <div className="audio-wrapper d-inline-block me-2 mb-2">
                        <audio
                            src={`${assetsUrl}/${audio}`}
                            controls
                            className="d-block"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserComment;

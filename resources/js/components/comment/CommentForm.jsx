import React from "react";

function CommentForm({ user }) {
    return (
        <div className="row">
            <div className="card shadow-sm col-12 col-md-12">
                <div className="card-body">
                    <div
                        id="image-preview-container"
                        className="card-body mt-3 d-flex flex-wrap"
                        style={{ gap: 10 }}
                    ></div>
                    <div className="card-footer py-2 px-3">
                        <textarea
                            className="form-control border-1 shadow-none"
                            placeholder="Type a Message"
                            rows={4}
                            defaultValue={""}
                        />
                        <hr className="my-2" />
                        <div className="d-sm-flex align-items-center justify-content-end">
                            <div
                                id="audio-preview-container"
                                className="mt-3"
                            />
                            <div className="d-flex align-items-center flex-wrap ms-auto">
                                {/* Upload image */}
                                <a
                                    href="#!"
                                    id="post-image"
                                    className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    <i className="ti ti-photo f-18 me-1" />
                                </a>
                                <input
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    multiple
                                    style={{ display: "none" }}
                                />
                                {/* Voice record */}
                                <div
                                    id="voice-controls"
                                    className="d-flex align-items-center"
                                >
                                    <a
                                        href="#!"
                                        id="start-recording"
                                        className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <i className="ti ti-microphone f-18 me-1" />
                                    </a>
                                    <div
                                        id="recording-controls"
                                        className="d-none mx-2"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <button
                                            id="stop-recording"
                                            className="btn btn-danger btn-sm"
                                        >
                                            Stop
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn btn-dark shadow-sm"
                                        style={{
                                            width: "100%",
                                            maxWidth: 150,
                                        }}
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;

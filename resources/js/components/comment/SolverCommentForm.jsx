import { router } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";

function SolverCommentForm({ user, doubt }) {
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [text, setText] = useState(""); // Track comment text
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);
    const timerRef = useRef(null); // Use ref to store timer ID

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage({
                file,
                preview: URL.createObjectURL(file),
            });
        }
        event.target.value = "";
    };

    const handleImageRemove = () => {
        setImage(null);
    };

    const startRecording = async () => {
        setIsRecording(true);
        try {
            setSeconds(0);
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            mediaStream.current = stream;
            mediaRecorder.current = new MediaRecorder(stream);

            mediaRecorder.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunks.current.push(e.data);
                }
            };

            mediaRecorder.current.onstop = () => {
                const recordedBlob = new Blob(chunks.current, {
                    type: "audio/mp3",
                });
                const url = URL.createObjectURL(recordedBlob);
                setAudio({
                    blob: recordedBlob,
                    preview: url,
                });

                chunks.current = [];
                clearInterval(timerRef.current);
            };

            // Start the timer when recording begins
            timerRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);

            mediaRecorder.current.start();
        } catch (error) {
            console.log(error);
        }
    };

    const stopRecording = () => {
        setIsRecording(false);
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            mediaStream.current.getTracks().forEach((track) => track.stop());
        }
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("text", text);
        formData.append("doubt_slug", doubt.slug);
        formData.append("doubt_id", doubt.id);

        // append image if available
        if (image && image.file) {
            formData.append("image", image.file);
        } else {
            console.error("No valid image file selected.");
        }

        // append audio if available
        if (audio && audio.blob) {
            const renamedAudioFile = new File([audio.blob], "audio.mp3", {
                type: audio.blob.type,
            });
            formData.append("audio", renamedAudioFile);
        }

        router.post(route("execute.solver.add.comment"), formData, {
            onSuccess: () => {
                setText("");
                setImage(null);
                setAudio();
            },
        });
    };

    return (
        <div className="row">
            <div className="card shadow-sm col-12 col-md-12">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div
                            id="image-preview-container"
                            className="card-body mt-3 d-flex flex-wrap"
                            style={{ gap: 10 }}
                        >
                            {image && (
                                <div className="image-wrapper d-inline-block position-relative me-2 mb-2">
                                    <img
                                        src={image.preview}
                                        alt={image.file.name}
                                        className="img-thumbnail"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <button
                                        className="btn btn-danger btn-sm position-absolute top-0 end-0"
                                        style={{
                                            transform: "translate(50%, -50%)",
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent form submission
                                            handleImageRemove();
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="card-footer py-2 px-3">
                            <textarea
                                className="form-control border-1 shadow-none"
                                placeholder="Type a Message"
                                rows={4}
                                value={text} // Controlled textarea for comment text
                                onChange={(e) => setText(e.target.value)} // Update state
                            />
                            <hr className="my-2" />
                            <div className="d-sm-flex align-items-center justify-content-end">
                                <div
                                    id="audio-preview-container"
                                    className="mt-3"
                                >
                                    {audio && (
                                        <div className="audio-wrapper d-inline-block me-2 mb-2">
                                            <audio
                                                src={audio.preview}
                                                controls
                                                className="d-block"
                                            />
                                            <button
                                                className="btn btn-danger btn-sm mt-2"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent form submission
                                                    setAudio(null);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="d-flex align-items-center flex-wrap ms-auto">
                                    {/* Upload image */}
                                    <button
                                        id="post-image"
                                        className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                        style={{ whiteSpace: "nowrap" }}
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent form submission
                                            document
                                                .getElementById("image-upload")
                                                .click();
                                        }}
                                    >
                                        <i className="ti ti-photo f-18 me-1" />
                                    </button>
                                    <input
                                        type="file"
                                        id="image-upload"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        style={{ display: "none" }}
                                    />

                                    {/* Voice record */}
                                    <div
                                        id="voice-controls"
                                        className="d-flex align-items-center"
                                    >
                                        <button
                                            id="start-recording"
                                            className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                            style={{ whiteSpace: "nowrap" }}
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent form submission
                                                startRecording();
                                            }}
                                        >
                                            <i className="ti ti-microphone f-18 me-1" />
                                        </button>
                                        <div
                                            id="recording-controls"
                                            className={
                                                isRecording
                                                    ? "d-flex"
                                                    : "d-none"
                                            }
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            <button
                                                id="stop-recording"
                                                className="btn btn-danger btn-sm"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent form submission
                                                    stopRecording();
                                                }}
                                            >
                                                Stop
                                            </button>
                                        </div>
                                    </div>

                                    {/* Display recording timer */}
                                    {isRecording && (
                                        <div className="ms-3 text-muted m-3">
                                            Recording: {seconds}s
                                        </div>
                                    )}

                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-dark shadow-sm"
                                            style={{
                                                width: "100%",
                                                maxWidth: 150,
                                            }}
                                            type="submit"
                                        >
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SolverCommentForm;

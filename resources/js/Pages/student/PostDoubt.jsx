import React, { useState, useRef, useEffect } from "react";
import Layout from "@/layouts/Layout";

function PostDoubt() {
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);
    const [className, setClassName] = useState("");
    const [subject, setSubject] = useState("");
    const [chapter, setChapter] = useState("");
    const [text, setText] = useState("");
    const [seconds, setSeconds] = useState(0);

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

            const timer = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);

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
                clearTimeout(timer);
            };

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
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRecording]);

    return (
        <>
            {/* [ Main Content ] start */}
            <div className="row">
                <div className="card shadow-sm col-12 col-md-8">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Your Class
                                </label>
                                <select
                                    className="form-control"
                                    name="selectClass"
                                    id="selectClass"
                                    required
                                    value={className}
                                    onChange={(e) =>
                                        setClassName(e.target.value)
                                    }
                                >
                                    <option label="select" />
                                    <option>Class 9</option>
                                    <option>Class 10</option>
                                    <option>Class 11</option>
                                    <option>Class 12</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Subject
                                </label>
                                <select
                                    className="form-control"
                                    name="selectSubject"
                                    id="selectSubject"
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <option label="select" />
                                    <option>Vector</option>
                                    <option>Physics</option>
                                    <option>Maths</option>
                                    <option>Chemistry</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Chapter
                                </label>
                                <select
                                    className="form-control"
                                    name="selectChapter"
                                    id="selectChapter"
                                    required
                                    value={chapter}
                                    onChange={(e) => setChapter(e.target.value)}
                                >
                                    <option label="select" />
                                    <option>Chapter 1</option>
                                    <option>Chapter 2</option>
                                    <option>Chapter 3</option>
                                    <option>Chapter 4</option>
                                </select>
                            </div>
                        </div>
                        <textarea
                            className="form-control border-1 shadow-none mb-3 mt-4"
                            placeholder="Post Your Doubt Here"
                            rows={6}
                            style={{ resize: "none", width: "100%" }}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                            <div className="d-flex align-items-center flex-wrap">
                                {/* Upload Image */}
                                <button
                                    id="post-image"
                                    className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                    onClick={() =>
                                        document
                                            .getElementById("image-upload")
                                            .click()
                                    }
                                >
                                    <i className="ti ti-photo f-18 me-1" />{" "}
                                    Image
                                </button>
                                <input
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleImageUpload}
                                />
                                {/* Image Preview */}

                                {/* Voice Recording */}
                                <div
                                    id="voice-controls"
                                    className="d-flex align-items-center"
                                >
                                    {!isRecording ? (
                                        <button
                                            id="start-recording"
                                            className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                            onClick={startRecording}
                                        >
                                            <i className="ti ti-microphone f-18 me-1" />{" "}
                                            Record
                                        </button>
                                    ) : (
                                        <div
                                            id="recording-controls"
                                            className="ms-2"
                                        >
                                            <button
                                                id="stop-recording"
                                                className="btn btn-danger btn-sm"
                                                onClick={stopRecording}
                                            >
                                                Stop
                                            </button>
                                            <span className="ms-2">
                                                {seconds}s
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div
                            className="d-flex flex-wrap my-5"
                            style={{ justifyContent: "space-between" }}
                        >
                            {image && (
                                <div
                                    id="image-preview-container"
                                    className="d-flex flex-wrap"
                                >
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
                                                transform:
                                                    "translate(50%, -50%)",
                                            }}
                                            onClick={handleImageRemove}
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* Audio Preview */}
                            {audio && (
                                <div
                                    id="audio-preview-container"
                                    className="d-flex flex-wrap"
                                >
                                    <div className="audio-wrapper d-inline-block me-2 mb-2">
                                        <audio
                                            src={audio.preview}
                                            controls
                                            className="d-block"
                                        />
                                        <button
                                            className="btn btn-danger btn-sm mt-2"
                                            onClick={() => setAudio(null)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Post button aligned to the right */}
                        <div className="d-flex justify-content-end mt-3">
                            <button
                                className="btn btn-dark shadow-sm"
                                style={{ width: "100%", maxWidth: 150 }}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preview Card */}
                <div className="col-12 col-md-4">
                    <div
                        className="card"
                        style={{ backgroundColor: "#174267" }}
                    >
                        <div className="card-body">
                            <h4
                                className="text-center mb-3"
                                style={{ color: "#FFE81C" }}
                            >
                                Preview
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h5
                                        className="text-white d-flex align-items-center flex-wrap gap-1"
                                        style={{
                                            justifyContent: "center",
                                        }}
                                    >
                                        <span>
                                            {className ? className : "Class"}
                                        </span>
                                        <i className="ti ti-chevron-right" />
                                        <span>
                                            {subject ? subject : "Subject"}
                                        </span>
                                        <i className="ti ti-chevron-right" />
                                        <span>
                                            {chapter ? chapter : "Chapter"}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                            <hr
                                style={{ color: "#FFE81C" }}
                                id="preview-line"
                            />
                            <div className="mt-2">
                                <p
                                    className="text-white"
                                    style={{ fontSize: "14px" }}
                                >
                                    {text || "No text added"}
                                </p>
                                {image && (
                                    <img
                                        src={image.preview}
                                        alt={image.file.name}
                                        className="img-thumbnail"
                                    />
                                )}
                                {audio && (
                                    <audio
                                        controls
                                        className="d-block mt-2"
                                        src={audio.preview}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ Main Content ] end */}
        </>
    );
}

PostDoubt.layout = (page) => <Layout children={page} />;
export default PostDoubt;

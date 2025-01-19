import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Layout from "../../layouts/Layout";

function PostDoubt() {
    const [images, setImages] = useState([]);
    const [audio, setAudio] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const mediaRecorderRef = useRef(null);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.filter((file) =>
            file.type.startsWith("image/")
        );
        setImages((prev) => [
            ...prev,
            ...newImages.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            })),
        ]);
        event.target.value = ""; // Reset the input to allow re-upload of the same file
    };

    const handleImageRemove = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const startRecording = async () => {
        if (!navigator.mediaDevices?.getUserMedia) {
            alert("Your browser does not support voice recording.");
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            setAudioChunks([]);
            setIsRecording(true);

            mediaRecorder.addEventListener("dataavailable", (event) => {
                setAudioChunks((prev) => [...prev, event.data]);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
                setAudio({
                    blob: audioBlob,
                    preview: URL.createObjectURL(audioBlob),
                });
                setIsRecording(false);
            });

            mediaRecorder.start();
        } catch (error) {
            alert("Unable to access microphone: " + error.message);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream
                .getTracks()
                .forEach((track) => track.stop());
        }
    };
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
                                >
                                    <option label="select" />
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
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
                                >
                                    <option label="select" />
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                    <option>Vector</option>
                                </select>
                            </div>
                        </div>
                        <textarea
                            className="form-control border-0 shadow-none mb-3 mt-4"
                            placeholder="Post Your Doubt Here"
                            rows={6}
                            style={{ resize: "none", width: "100%" }}
                            defaultValue={""}
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
                                    multiple
                                    style={{ display: "none" }}
                                    onChange={handleImageUpload}
                                />
                                {/* Image Previews */}
                                <div
                                    id="image-preview-container"
                                    className="d-flex flex-wrap"
                                >
                                    {images.map((img, index) => (
                                        <div
                                            key={index}
                                            className="image-wrapper d-inline-block position-relative me-2 mb-2"
                                        >
                                            <img
                                                src={img.preview}
                                                alt={img.file.name}
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
                                                onClick={() =>
                                                    handleImageRemove(index)
                                                }
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>

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
                                        </div>
                                    )}
                                </div>

                                {/* Audio Preview */}
                                <div
                                    id="audio-preview-container"
                                    className="d-flex flex-wrap"
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
                                                onClick={() => setAudio(null)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Preview containers */}
                        <div
                            id="image-preview-container"
                            className="mt-3 d-flex flex-wrap"
                            style={{ gap: 10 }}
                        />
                        <div id="audio-preview-container" className="mt-3" />
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
                <div className="col-12 col-md-4">
                    <div
                        className="card"
                        style={{ backgroundColor: "#174267" }}
                    >
                        <div className="card-body">
                            <h4
                                className=" text-center mb-3"
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
                                        <span>Class</span>
                                        <i className="ti ti-chevron-right" />
                                        <span>Subject</span>
                                        <i className="ti ti-chevron-right" />
                                        <span>Chapter</span>
                                    </h5>
                                </div>
                            </div>
                            <hr style={{ color: "#FFE81C" }} id="specialhr" />
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Ipsam
                                            aut hic dignissimos sapiente ab
                                            nostrum, eveniet provident corrupti
                                            saepe enim.
                                        </p>
                                        {/* <img src="https://dummyimage.com/600x400/000/fff" alt="" class="img-fluid mb-1"> */}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ti ti-user text-white" />
                                        <p className="text-white mb-0">
                                            Username
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ti ti-clock text-white" />
                                        <p className="text-white mb-0">
                                            Just Now
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h2
                    className="doubts-title mb-4 mt-5"
                    style={{
                        color: "#174267",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    Your Doubts <i className="ti ti-arrow-right" />
                </h2>
                <div className="col-12 col-md-4">
                    <div
                        className="card"
                        style={{ backgroundColor: "#174267" }}
                    >
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center ">
                                <div>
                                    <h5
                                        className="text-white d-flex align-items-center flex-wrap gap-1"
                                        style={{ textAlign: "center" }}
                                    >
                                        <span>Class</span>{" "}
                                        <i className="ti ti-chevron-right" />{" "}
                                        <span>Subject</span>{" "}
                                        <i className="ti ti-chevron-right" />{" "}
                                        <span>Chapter</span>
                                    </h5>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-success"
                                        style={{
                                            padding: "5px 20px",
                                            borderRadius: 9,
                                        }}
                                    >
                                        Solved
                                    </button>
                                </div>
                            </div>
                            <hr style={{ color: "#FFE81C" }} id="specialhr" />
                            <div className="row">
                                <div>
                                    <div className="p-4 d-flex flex-column align-items-center gap-4">
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Ipsam
                                            aut hic dignissimos sapiente ab
                                            nostrum, eveniet provident corrupti
                                            saepe enim.
                                        </p>
                                        <img
                                            src="https://dummyimage.com/600x400/000/fff"
                                            alt
                                            className="img-fluid mb-1"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ti ti-user text-white" />
                                        <p className="text-white mb-0">
                                            Username
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="ti ti-clock text-white" />
                                        <p className="text-white mb-0">
                                            1 hour ago
                                        </p>
                                    </div>
                                </div>
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

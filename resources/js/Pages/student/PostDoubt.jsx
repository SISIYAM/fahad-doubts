import React, { useState, useRef, useEffect } from "react";
import Layout from "@/layouts/Layout";
import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js";
import { toast, ToastContainer } from "react-toastify";
import DoubtCard from "../../components/DoubtCard";

function PostDoubt({
    doubts,
    classes,
    subjects,
    chapters,
    errors,
    flash,
    env,
}) {
    const assetsUrl = env.ASSETS_URL;
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);

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

    // filter class wise subject
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [filteredChapters, setFilteredChapters] = useState([]);

    // set states for form data
    const [classId, setClassId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [chapterId, setChapterId] = useState("");
    const [text, setText] = useState("");

    const [selectedNames, setSelectedNames] = useState({
        className: "",
        subjectName: "",
        chapterName: "",
    });

    const handleClassChange = (e) => {
        const selectedClassId = e.target.value;
        setClassId(selectedClassId);

        // Find the class name for the selected class Id
        const selectedClass = classes.find(
            (classItem) => classItem.id.toString() == selectedClassId
        );

        setSelectedNames((prev) => ({
            ...prev,
            className: selectedClass ? selectedClass.name : "",
        }));

        // Filter subjects based on the selected class
        const filtered = subjects.filter(
            (subject) => subject.class_id == selectedClassId
        );
        setFilteredSubjects(filtered);
    };

    const handleSubjectChange = (e) => {
        const selectedSubjectId = e.target.value;
        setSubjectId(selectedSubjectId);

        // Find the subject name for the selected subject ID
        const selectedSubject = subjects.find(
            (subject) => subject.id.toString() == selectedSubjectId
        );

        setSelectedNames((prev) => ({
            ...prev,
            subjectName: selectedSubject ? selectedSubject.name : "",
        }));

        // Filter chapters based on the selected subject
        const filtered = chapters.filter(
            (chapter) => chapter.subject_id == selectedSubjectId
        );
        setFilteredChapters(filtered);
    };

    // handle chapter change
    const handleChapterChange = (e) => {
        const selectedChapterId = e.target.value;

        setChapterId(selectedChapterId);

        const selectedChapter = chapters.find(
            (chapter) => chapter.id.toString() == selectedChapterId
        );

        setSelectedNames((prev) => ({
            ...prev,
            chapterName: selectedChapter ? selectedChapter.name : "",
        }));
    };

    // handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("class_id", classId);
        formData.append("subject_id", subjectId);
        formData.append("chapter_id", chapterId);
        formData.append("text", text);

        // Extract the actual file object from the `image` object
        if (image && image.file) {
            formData.append("image", image.file);
        } else {
            console.error("No valid image file selected.");
        }

        if (audio && audio.blob) {
            const renamedAudioFile = new File([audio.blob], "audio.mp3", {
                type: audio.blob.type,
            });
            formData.append("audio", renamedAudioFile);
        }

        console.log("Form Data:", Array.from(formData.entries()));
        router.post(route("execute.add.doubt"), formData);
    };

    // method for reset all
    const resetInputs = () => {
        setSelectedNames({
            className: null,
            subjectName: null,
            chapterName: null,
        });
        setClassId("");
        setSubjectId("");
        setChapterId("");
        setFilteredSubjects([]);
        setFilteredChapters([]);
        setText("");
        setImage(null);
        setAudio(null);
    };

    // show success message
    if (flash.success) {
        toast.success(flash.success);
        resetInputs();
        flash.success = null;
    }

    // Show error message
    if (flash.error) {
        toast.error(flash.error);
        flash.error = null;
    }

    if (errors) {
        Object.values(errors).forEach((error) => {
            toast.error(error);
        });
        errors = null;
    }

    return (
        <>
            {" "}
            <ToastContainer />
            {/* [ Main Content ] start */}
            <div className="row">
                <div className="card shadow-sm col-12 col-md-8">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <div className="col-lg-4 col-md-12">
                                    <label className="col-form-label text-lg-end">
                                        Select Your Class
                                    </label>
                                    <select
                                        className="form-control"
                                        name="selectClass"
                                        id="selectClass"
                                        value={classId}
                                        onChange={(e) => handleClassChange(e)}
                                    >
                                        <option value="" disabled>
                                            Select Class
                                        </option>
                                        {Array.isArray(classes) &&
                                            classes.map((classItem) => (
                                                <option
                                                    key={classItem.id}
                                                    value={classItem.id}
                                                >
                                                    {classItem.name}
                                                </option>
                                            ))}
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
                                        value={subjectId}
                                        onChange={(e) => handleSubjectChange(e)}
                                    >
                                        <option value="">Select Subject</option>
                                        {filteredSubjects.map((subject) => (
                                            <option
                                                key={subject.id}
                                                value={subject.id}
                                            >
                                                {subject.name}
                                            </option>
                                        ))}
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
                                        value={chapterId}
                                        onChange={(e) => handleChapterChange(e)}
                                    >
                                        <option value="">Select Chapter</option>
                                        {filteredChapters.map((chapter) => (
                                            <option
                                                key={chapter.id}
                                                value={chapter.id}
                                            >
                                                {chapter.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <textarea
                                className="form-control border-1 shadow-none mb-3 mt-4"
                                placeholder="Post Your Doubt Here"
                                rows={6}
                                required
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .getElementById("image-upload")
                                                .click();
                                        }}
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
                                    {/* Voice Recording */}
                                    <div
                                        id="voice-controls"
                                        className="d-flex align-items-center"
                                    >
                                        {!isRecording ? (
                                            <button
                                                id="start-recording"
                                                className="btn btn-light me-2 mb-2 mb-md-0 shadow-sm"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    startRecording();
                                                }}
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
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        stopRecording();
                                                    }}
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
                                    type="submit"
                                >
                                    Post
                                </button>
                            </div>
                        </form>
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
                                            {selectedNames?.className
                                                ? selectedNames?.className
                                                : "Class"}
                                        </span>
                                        <i className="ti ti-chevron-right" />
                                        <span>
                                            {selectedNames?.subjectName
                                                ? selectedNames?.subjectName
                                                : "Subject"}
                                        </span>
                                        <i className="ti ti-chevron-right" />
                                        <span>
                                            {selectedNames?.chapterName
                                                ? selectedNames?.chapterName
                                                : "Chapter"}
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
                {doubts.length > 0
                    ? doubts.map((doubt) => (
                          <DoubtCard
                              className={doubt?.class?.name}
                              subject={doubt?.subject?.name}
                              chapter={doubt?.chapter?.name}
                              status={doubt?.status}
                              text={doubt?.text}
                              image={doubt?.image}
                              audio={doubt?.audio}
                              assetsUrl={assetsUrl}
                              created_at={doubt?.created_at}
                              student={doubt?.student?.name}
                              slug={doubt?.slug}
                          />
                      ))
                    : ""}
            </div>
            {/* [ Main Content ] end */}
        </>
    );
}

PostDoubt.layout = (page) => <Layout children={page} />;
export default PostDoubt;

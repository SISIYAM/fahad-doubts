import React, { useState } from "react";
import Layout from "@/layouts/Layout";
import DoubtCard from "../../components/DoubtCard";
import NotFoundAlert from "../../components/NotFoundAlert";

function ExploreDoubt({ doubts, classes, subjects, chapters, env }) {
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedChapter, setSelectedChapter] = useState("");

    const assetsUrl = env.ASSETS_URL;

    // Filter subjects based on the selected class
    const filteredSubjects = selectedClass
        ? subjects.filter((subject) => subject.class?.name === selectedClass)
        : subjects;

    // Filter chapters based on the selected subject
    const filteredChapters = selectedSubject
        ? chapters.filter(
              (chapter) => chapter.subject?.name === selectedSubject
          )
        : chapters;

    // Filter doubts based on selections
    const filteredDoubts = doubts.filter((doubt) => {
        const matchesClass =
            !selectedClass || doubt.class?.name === selectedClass;
        const matchesSubject =
            !selectedSubject || doubt.subject?.name === selectedSubject;
        const matchesChapter =
            !selectedChapter || doubt.chapter?.name === selectedChapter;
        return matchesClass && matchesSubject && matchesChapter;
    });

    return (
        <>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-5 row">
                            <div className="col-lg-4 col-md-12">
                                <label className="col-form-label text-lg-end">
                                    Select Your Class
                                </label>
                                <select
                                    className="form-control"
                                    name="selectClass"
                                    id="selectClass"
                                    value={selectedClass}
                                    onChange={(e) => {
                                        setSelectedClass(e.target.value);
                                        setSelectedSubject(""); // Reset subject when class changes
                                        setSelectedChapter(""); // Reset chapter when class changes
                                    }}
                                >
                                    <option value="">Select</option>
                                    {classes.map((cls) => (
                                        <option key={cls.id} value={cls.name}>
                                            {cls.name}
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
                                    value={selectedSubject}
                                    onChange={(e) => {
                                        setSelectedSubject(e.target.value);
                                        setSelectedChapter(""); // Reset chapter when subject changes
                                    }}
                                >
                                    <option value="">Select</option>
                                    {filteredSubjects.map((subject) => (
                                        <option
                                            key={subject.id}
                                            value={subject.name}
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
                                    value={selectedChapter}
                                    onChange={(e) =>
                                        setSelectedChapter(e.target.value)
                                    }
                                >
                                    <option value="">Select</option>
                                    {filteredChapters.map((chapter) => (
                                        <option
                                            key={chapter.id}
                                            value={chapter.name}
                                        >
                                            {chapter.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {filteredDoubts.length > 0 ? (
                    filteredDoubts.map((doubt) => (
                        <DoubtCard
                            key={doubt.id}
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
                ) : (
                    <NotFoundAlert />
                )}
            </div>
        </>
    );
}

ExploreDoubt.layout = (page) => <Layout children={page} />;
export default ExploreDoubt;

import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function JobBoard() {
  const [jobs, setJobs] = useState([]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobId, setJobId] = useState("");
  const [experience, setExperience] = useState("");
  const [postedDate, setPostedDate] = useState("");

  const [responsibilities, setResponsibilities] = useState([]);
  const [skills, setSkills] = useState([]);

  const [editingRespIndex, setEditingRespIndex] = useState<number | null>(null);
  const [editingSkillIndex, setEditingSkillIndex] = useState<number | null>(
    null
  );

  const [respInput, setRespInput] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const [editId, setEditId] = useState(null);

  const jobsCollection = collection(db, "jobs");

  const getJobs = async () => {
    const data = await getDocs(jobsCollection);
    setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getJobs();
  }, []);

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setLocation("");
    setJobId("");
    setExperience("");
    setPostedDate("");
    setResponsibilities([]);
    setSkills([]);
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      company,
      location,
      jobId,
      experience,
      postedDate,
      responsibilities,
      skills,
    };

    if (editId) {
      const jobDoc = doc(db, "jobs", editId);
      await updateDoc(jobDoc, jobData);
    } else {
      await addDoc(jobsCollection, jobData);
    }

    resetForm();
    getJobs();
  };

  const handleDelete = async (id) => {
    const jobDoc = doc(db, "jobs", id);
    await deleteDoc(jobDoc);
    getJobs();
  };

  const handleEdit = (job) => {
    setEditId(job.id);
    setTitle(job.title);
    setCompany(job.company);
    setLocation(job.location);
    setJobId(job.jobId);
    setExperience(job.experience);
    setPostedDate(job.postedDate);
    setResponsibilities(job.responsibilities || []);
    setSkills(job.skills || []);
  };

  const addResponsibility = () => {
    const trimmed = respInput.trim();
    if (!trimmed) return;

    setResponsibilities([...responsibilities, trimmed]);
    setRespInput("");
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const updateResponsibility = (index: number, value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      // If blank → remove
      removeResponsibility(index);
      return;
    }

    const updated = [...responsibilities];
    updated[index] = trimmed;
    setResponsibilities(updated);
    setEditingRespIndex(null);
  };

  const removeResponsibility = (index: number) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Job Upload - Jetronixs
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Job ID */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter 4 digit job ID"
                value={jobId}
                onChange={(e) => setJobId(e.target.value)}
              />
            </div>
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Remote / Onsite / Hybrid /Place"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Job Type */}

            {/* Experience */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Experience
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="5+ Years"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            {/* Posted Date */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Posted Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="November 19, 2025"
                value={postedDate}
                onChange={(e) => setPostedDate(e.target.value)}
              />
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="font-semibold">Responsibilities</label>
            <div className="flex gap-2 mt-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-1"
                value={respInput}
                onChange={(e) => setRespInput(e.target.value)}
                placeholder="Add responsibility"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // stop form submit
                    addResponsibility(); // add bullet
                  }
                }}
              />
              <button
                type="button"
                onClick={addResponsibility}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-gray-700">
              {responsibilities.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between gap-3">
                    {editingRespIndex === index ? (
                      <input
                        autoFocus
                        defaultValue={item}
                        onBlur={(e) =>
                          updateResponsibility(index, e.target.value)
                        }
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      <>
                        <span>{item}</span>

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingRespIndex(index)}
                            className="text-blue-600 text-xs"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => removeResponsibility(index)}
                            className="text-red-600 text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <label className="font-semibold">Skills</label>
            <div className="flex gap-2 mt-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-1"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add skill"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // stop form submit
                    addSkill(); // add bullet
                  }
                }}
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-xl text-gray-700">
              {skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            {editId ? "Update Job" : "Add Job"}
          </button>
        </form>

        {/* JOB LIST */}
        <h1 className="text-3xl font-bold mb-6 mt-6 text-gray-800">
          Job Upload - Jetronixs
        </h1>
        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{job.title}</h2>
                  <p className="text-gray-600">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.type} | {job.experience} | {job.postedDate}
                  </p>
                </div>

                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(job)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Responsibilities</h3>
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 space-y-1">
                  {job.responsibilities?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Skills</h3>
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 space-y-1">
                  {job.skills?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind input reusable class */}
      <style>{`
        .input {
          @apply w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black;
        }
      `}</style>
    </div>
  );
}

export default JobBoard;

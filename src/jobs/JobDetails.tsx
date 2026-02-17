// src/pages/JobDetails.tsx
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { jobs } from "./Jobs.js";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useJobs } from "@/context/FetchJob.js";

const JobDetails = () => {
  const { jobs } = useJobs();
  const { id } = useParams();

  const job = jobs.find((job) => job.jobId === id);

  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
    agreed: false,
  };

  const [form, setForm] = useState(initialForm);

  const isFormValid =
    form.fullName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.coverLetter.trim() !== "" &&
    form.resume !== null &&
    form.agreed === true;

  if (!job) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 text-center">
          <h2 className="text-2xl font-semibold">Job not found</h2>
          <Link
            to="/careers"
            className="text-primary underline mt-4 inline-block"
          >
            Back to Careers
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20 bg-[#cae6ff]">
        <div className="container mx-auto max-w-4xl bg-white py-8 px-8">
          {/* Job Header */}
          <h1 className="text-3xl font-bold mb-2">{job?.title}</h1>
          <p className="text-muted-foreground mb-6">
            {job.company && (
              <p>
                By {job.company} / {job.postedDate}
              </p>
            )}
          </p>

          {/* Meta Info */}
          <div className="space-y-1 text-sm mb-10">
            <p>
              <strong>Job Type:</strong> {job?.type}
            </p>
            <p>
              <strong>Job Location:</strong> {job?.location}
            </p>
            <p>
              <strong>Job ID:</strong> {job?.jobId}
            </p>
            <p>
              <strong>Experience:</strong> {job?.experience}+ years
            </p>
          </div>

          {/* Responsibilities */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2">
              {job?.responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <ul className="list-disc pl-5 space-y-2">
              {job?.skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Apply Section */}
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Apply for this position
              </h3>

              {/* FORM — wireframe only */}
              <form
                className="grid gap-5"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData();
                  formData.append("fullName", form.fullName);
                  formData.append("email", form.email);
                  formData.append("phone", form.phone);
                  formData.append("coverLetter", form.coverLetter);
                  formData.append("jobTitle", job.title);
                  formData.append("jobId", String(job.jobId));

                  if (form.resume) {
                    formData.append("resume", form.resume);
                  }

                  try {
                    const res = await fetch(
                      "https://jetronixs-email-service.vercel.app/api/apply",
                      {
                        method: "POST",
                        body: formData,
                      }
                    );

                    console.log("Status:", res.status);

                    const text = await res.text();
                    console.log("Raw response:", text);

                    const data = JSON.parse(text);

                    if (data.success) {
                      alert("Application submitted successfully");
                    } else {
                      alert("Failed: " + data.message);
                    }
                    setForm(initialForm);
                  } catch (err) {
                    console.error("FETCH ERROR:", err);
                    alert("Server error");
                    setForm(initialForm);
                  }
                }}
              >
                {/* Full Name */}
                <div>
                  <label className="block mb-1 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-xl"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border p-3 rounded-xl"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-1 font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-xl"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block mb-1 font-medium">
                    Cover Letter <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border p-3 rounded-xl"
                    value={form.coverLetter}
                    onChange={(e) =>
                      setForm({ ...form, coverLetter: e.target.value })
                    }
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block mb-1 font-medium">
                    Upload CV/Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="w-full border p-3 rounded-xl"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        resume: e.target.files ? e.target.files[0] : null,
                      })
                    }
                  />
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={(e) =>
                      setForm({ ...form, agreed: e.target.checked })
                    }
                    className="mt-1"
                  />
                  <p className="text-sm">
                    By using this form you agree with the storage and handling
                    of your data by Jetronixs
                    <span className="text-red-500"> *</span>
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`py-3 rounded-xl text-white transition ${
                    isFormValid
                      ? "bg-primary hover:opacity-90"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetails;

// src/pages/JobDetails.tsx
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { jobs } from "./Jobs.js";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useJobs } from "@/context/FetchJob.js";

const JobDetails = () => {
  const { jobs, loading } = useJobs();
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    form.fullName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.resume !== null &&
    form.agreed === true;

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 text-center">
          <h2 className="text-2xl font-semibold">Loading job details...</h2>
        </main>
        <Footer />
      </div>
    );
  }

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
          <div className="text-muted-foreground mb-6">
            {job.company && (
              <p>
                By {job.company} / {job.postedDate}
              </p>
            )}
          </div>

          {/* Meta Info */}
          <div className="space-y-1 text-sm mb-10">
            <p>
              <strong>Job Type:</strong> {job?.jobType || job?.type || "Full Time"}
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

          {/* Description */}
          {job?.description && (
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
            </section>
          )}

          {/* Responsibilities */}
          {job?.responsibilities && (Array.isArray(job.responsibilities) ? job.responsibilities.length > 0 : true) && (
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2">
                {Array.isArray(job.responsibilities) ? (
                  job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>{job.responsibilities}</li>
                )}
              </ul>
            </section>
          )}

          {/* Skills */}
          {job?.skills && (Array.isArray(job.skills) ? job.skills.length > 0 : true) && (
            <section className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="list-disc pl-5 space-y-2">
                {Array.isArray(job.skills) ? (
                  job.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))
                ) : (
                  <li>{job.skills}</li>
                )}
              </ul>
            </section>
          )}

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
                  setIsSubmitting(true);

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
                      },
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
                  } catch (err: any) {
                    console.error("FETCH ERROR:", err);
                    alert(err.message || "An error occurred during submission. Please try again.");
                    setForm(initialForm);
                  } finally {
                    setIsSubmitting(false);
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
                    className="w-full border p-3 rounded-xl disabled:opacity-50"
                    value={form.fullName}
                    disabled={isSubmitting}
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
                    className="w-full border p-3 rounded-xl disabled:opacity-50"
                    value={form.email}
                    disabled={isSubmitting}
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
                    className="w-full border p-3 rounded-xl disabled:opacity-50"
                    value={form.phone}
                    disabled={isSubmitting}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block mb-1 font-medium">
                    Cover Letter <span className="text-gray-400 font-normal text-sm ml-1">(Optional)</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border p-3 rounded-xl disabled:opacity-50"
                    value={form.coverLetter}
                    disabled={isSubmitting}
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
                    className="w-full border p-3 rounded-xl disabled:opacity-50"
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    onChange={(e) =>
                      setForm({ ...form, agreed: e.target.checked })
                    }
                    className="mt-1 disabled:opacity-50"
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
                  disabled={!isFormValid || isSubmitting}
                  className={`py-3 rounded-xl text-white transition flex items-center justify-center gap-2 ${isFormValid && !isSubmitting
                    ? "bg-primary hover:opacity-90"
                    : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
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

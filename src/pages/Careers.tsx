import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { jobs } from "@/jobs/Jobs.js";
import { Link } from "react-router-dom";
import { useJobs } from "@/context/FetchJob";

const Careers = () => {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const {jobs,loading}=useJobs();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = jobType === "All" || job.type === jobType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
                Careers
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Shape the future with us at Jetronixs
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search + Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center">
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-1/3 px-5 py-3  border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full md:w-48 px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="All">All</option>
                <option value="Full Time">Full Time</option>
              </select> */}
            </div>

            {/* Job Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="group border border-border rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/careers/${job.jobId}`} className="text-primary">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground">{job.location}</p>
                      <p className="text-sm text-muted-foreground">
                        Job ID: {job.jobId}
                      </p>
                      More Details →
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

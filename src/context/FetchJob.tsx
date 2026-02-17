import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

interface Job {
    id: string;
  jobId: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  responsibilities: string[];
  skills: string[];
}

interface JobsContextType {
  jobs: Job[];
  loading: boolean;
  fetchJobs: () => Promise<void>;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const JobsProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "jobs")); // match your collection name
    const jobsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Job[];

    setJobs(jobsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider value={{ jobs, loading, fetchJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobs must be used within JobsProvider");
  }
  return context;
};

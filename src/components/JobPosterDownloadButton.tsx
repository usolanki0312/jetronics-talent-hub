import { useRef } from "react";
import JobCardPreview, {
  type JobCardPreviewHandle,
} from "./JobCardPreview";

interface Props {
  job: {
    title: string;
    responsibilities?: string[];
    skills?: string[];
    posterImage?: string;
  };
}

const JobPosterDownloadButton = ({ job }: Props) => {
  const ref = useRef<JobCardPreviewHandle>(null);

  const handleDownload = async () => {
    await ref.current?.downloadImage();
  };

  return (
    <>
      {/* Hidden off-screen poster used only for canvas capture.
          It must be in the DOM so html2canvas can render it. */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "768px",
          pointerEvents: "none",
          opacity: 0,
          zIndex: -1,
        }}
      >
        <JobCardPreview
          ref={ref}
          title={job.title}
          responsibilities={job.responsibilities || []}
          skills={job.skills || []}
          generatedImage={job.posterImage || ""}
        />
      </div>

      <button
        type="button"
        onClick={handleDownload}
        className="px-3 py-1 text-white rounded-lg text-sm transition"
        style={{ backgroundColor: "#f97316" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Download Post
      </button>
    </>
  );
};

export default JobPosterDownloadButton;
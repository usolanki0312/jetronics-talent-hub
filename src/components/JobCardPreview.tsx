import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import html2canvas from "html2canvas";
import templateImg from "../assets/template.png";
import "./JobCardPreview.css";

interface JobCardPreviewProps {
  title: string;
  location?: string;
  jobType?: string;
  responsibilities: string[];
  skills: string[];
  generatedImage?: string;
  children?: ReactNode;
}

export interface JobCardPreviewHandle {
  generateImage: () => Promise<string | null>;
  downloadImage: () => Promise<void>;
}

const JobCardPreview = forwardRef<JobCardPreviewHandle, JobCardPreviewProps>(
  (
    { title, location, jobType, responsibilities, skills, generatedImage, children }: JobCardPreviewProps,
    ref,
  ) => {
    const printRef = useRef<HTMLDivElement>(null);

    const posterSkills = useMemo(
      () => skills.filter(Boolean).slice(0, 5),
      [skills],
    );

    const jobTitle = title.trim() || "Job Title Preview";
    const titleLength = jobTitle.length;
    const titleSizeClass =
      titleLength > 40
        ? "job-card-preview__title--small"
        : titleLength > 26
          ? "job-card-preview__title--medium"
          : "";

    const generateImage = async () => {
      const element = printRef.current;
      if (!element) return null;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      return canvas.toDataURL("image/png");
    };

    const downloadImage = async () => {
      const dataUrl = generatedImage || (await generateImage());
      if (!dataUrl) return;

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${jobTitle.replace(/\s+/g, "-").toLowerCase()}-poster.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    useImperativeHandle(
      ref,
      () => ({
        generateImage,
        downloadImage,
      }),
      [generatedImage, jobTitle],
    );

    return (
      <div className="job-card-preview">
        <div className="job-card-preview__frame" ref={printRef}>
          <img
            src={templateImg}
            alt="Job poster template"
            crossOrigin="anonymous"
            className="job-card-preview__template"
          />

          <div className="job-card-preview__overlay">
            <div className="job-card-preview__titleWrap">
              <h2
                className={`job-card-preview__title ${titleSizeClass}`.trim()}
              >
                {jobTitle}
              </h2>
              {location && (
                <p className="job-card-preview__meta">
                  Location - {location}
                </p>
              )}
              {jobType && (
                <p className="job-card-preview__meta">
                  Job Type - {jobType}
                </p>
              )}
            </div>

            <ul className="job-card-preview__list">
              {posterSkills.map((item, index) => (
                <li key={`poster-skill-${index}`} className="job-card-preview__item">
                  <span className="job-card-preview__bullet" aria-hidden="true">
                    •
                  </span>
                  <span className="job-card-preview__text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {generatedImage ? (
          <div className="job-card-preview__saved">
            <img
              src={generatedImage}
              alt={`${jobTitle} poster`}
              className="job-card-preview__savedImage"
            />
          </div>
        ) : null}

        <div className="job-card-preview__actions">
          {children}
          <button
            type="button"
            onClick={downloadImage}
            className="job-card-preview__downloadButton"
          >
            Download Poster
          </button>
        </div>
      </div>
    );
  },
);

JobCardPreview.displayName = "JobCardPreview";

export default JobCardPreview;

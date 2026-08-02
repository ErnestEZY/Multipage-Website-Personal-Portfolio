import { useEffect, useRef, type ReactNode } from "react";
import type { Project } from "../data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

function linkifyDescription(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, index) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    lastFocus.current = document.activeElement as HTMLElement | null;
    document.body.classList.add("modal-open");
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
      lastFocus.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-root" role="presentation">
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <img src={project.image} alt={project.alt} loading="lazy" />
        <p className="modal-category">{project.category}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p>{linkifyDescription(project.description)}</p>
      </div>
    </div>
  );
}

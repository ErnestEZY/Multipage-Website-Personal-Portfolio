import type { Project } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  const ref = useReveal<HTMLButtonElement>();
  const snippet =
    project.description.length > 120
      ? `${project.description.slice(0, 117)}…`
      : project.description;

  return (
    <button
      type="button"
      className="project-card reveal"
      ref={ref}
      aria-haspopup="dialog"
      onClick={() => onOpen(project)}
    >
      <div className="project-card-media">
        <img
          src={project.image}
          alt={project.alt}
          width={640}
          height={440}
          decoding="async"
        />
      </div>
      <div className="project-card-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{snippet}</p>
      </div>
    </button>
  );
}

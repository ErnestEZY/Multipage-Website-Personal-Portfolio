import { useState } from "react";
import { site } from "../data/site";
import { projects, type Project } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionHeader from "../components/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Work() {
  usePageMeta(
    "Work",
    `Projects and case studies by ${site.name} — web, programming, and community work.`,
  );

  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader
            as="h1"
            eyebrow="Work"
            title="Projects & case studies"
            lead="Selected builds from diploma studies and beyond. Open a card for more detail."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

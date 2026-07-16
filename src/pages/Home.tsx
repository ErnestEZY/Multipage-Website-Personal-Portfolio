import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { projects, type Project } from "../data/projects";
import { hobbies } from "../data/journey";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionHeader from "../components/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";

function SnapshotBlock() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section snapshot-section">
      <div className="container">
        <SectionHeader
          eyebrow="Right now"
          title="A quick snapshot"
          lead="Where I’m headed, where I’m based, and what keeps me curious off the screen."
        />

        <div className="snapshot-grid reveal" ref={ref}>
          <article className="snapshot-item">
            <p className="snapshot-label">Studying</p>
            <h3>Bachelor of Software Engineering (Hons)</h3>
            <p>UOW Malaysia — building on my Computer Science diploma from INTI.</p>
          </article>

          <article className="snapshot-item">
            <p className="snapshot-label">Based in</p>
            <h3>{site.location}</h3>
            <p>
              Open to projects, internship leads, and conversations about web and
              app development.
            </p>
          </article>

          <article className="snapshot-item">
            <p className="snapshot-label">Away from code</p>
            <h3>Hobbies that shape how I learn</h3>
            <p>
              {hobbies.map((h) => h.title).join(" · ")} — more on the Journey
              page.
            </p>
            <Link className="journey-link" to="/journey">
              Explore my journey
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    "Home",
    `${site.name} — ${site.role}. Explore selected projects and get in touch.`,
  );

  const [active, setActive] = useState<Project | null>(null);
  const ctaRef = useReveal<HTMLDivElement>();
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-bg hero-bg--mesh" aria-hidden="true" />
        <div className="container hero-content">
          <h1 className="hero-brand hero-animate">
            Eh <span>Zhong Yu</span>
          </h1>
          <p className="hero-role hero-animate-delay">{site.role}</p>
          <p className="hero-support hero-animate-delay-2">{site.tagline}</p>
          <div className="btn-group hero-animate-delay-2">
            <Link className="btn btn-primary" to="/contact">
              Hire me
            </Link>
            <Link className="btn btn-ghost" to="/about">
              About me
            </Link>
          </div>
        </div>
      </section>

      <SnapshotBlock />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects worth a closer look"
            lead="A few builds from studies and personal practice — open any card for more detail."
          />

          <div className="project-grid">
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setActive}
              />
            ))}
          </div>

          <div
            className="cta-band reveal"
            ref={ctaRef}
            style={{ marginTop: "3rem" }}
          >
            <h2>Want the full gallery?</h2>
            <p>Browse every project and case study on the Work page.</p>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/work">
                View all work
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

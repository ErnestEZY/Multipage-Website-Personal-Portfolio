import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { projects, type Project } from "../data/projects";
import { hobbies } from "../data/journey";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import MobileCollapse from "../components/MobileCollapse";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";

const pulseChips = [
  "Software Engineering at UOW Malaysia",
  "Shah Alam",
  "Speedcubing · WCA 2017YUER01",
  "Wing Chun",
  "Python · Java · TypeScript",
  "APIs, databases, and practical builds",
];

function PulseBand() {
  const ref = useReveal<HTMLElement>();
  const chips = [...pulseChips, ...pulseChips];

  return (
    <section className="pulse-band" aria-label="A snapshot of who I am">
      <div className="container">
        <article className="pulse-card reveal" ref={ref}>
          <p className="pulse-live">Now</p>
          <p className="pulse-line">
            Final-year student who likes turning messy ideas into{" "}
            <em>working software</em> — then stepping away to solve a cube.
          </p>
          <div className="pulse-marquee" aria-hidden="true">
            <div className="pulse-marquee-track">
              {chips.map((chip, index) => (
                <span className="pulse-chip" key={`${chip}-${index}`}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="pulse-stats">
            <p className="pulse-stat">
              <span>Path</span>
              <strong>Diploma → Bachelor</strong>
            </p>
            <p className="pulse-stat">
              <span>Focus</span>
              <strong>Backend &amp; full-stack</strong>
            </p>
            <p className="pulse-stat">
              <span>Open to</span>
              <strong>Internships &amp; collabs</strong>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function SnapshotBlock() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section snapshot-section">
      <div className="container">
        <MobileCollapse
          eyebrow="Right now"
          title="A quick snapshot"
          lead="Where I’m headed, where I’m based, and what keeps me curious off the screen."
        >
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
        </MobileCollapse>
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

      <PulseBand />

      <SnapshotBlock />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <MobileCollapse
            eyebrow="Selected work"
            title="Projects worth a closer look"
            lead="A few builds from studies and personal practice — open any card for more detail."
          >
            <div className="project-grid">
              {featured.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setActive}
                  className={
                    project.id === "kpi-monitoring-system"
                      ? "home-featured-desktop-hide"
                      : undefined
                  }
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
          </MobileCollapse>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

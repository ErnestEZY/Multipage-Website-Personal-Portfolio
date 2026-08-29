import { site } from "../data/site";
import { timeline } from "../data/education";
import { highlights } from "../data/highlights";
import { toolbox, waysOfWorking } from "../data/toolbox";
import Timeline from "../components/Timeline";
import SectionHeader from "../components/SectionHeader";
import MobileCollapse from "../components/MobileCollapse";
import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  SocialIcon,
  UserIcon,
} from "../components/Icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";

function HighlightItem({
  title,
  description,
}: (typeof highlights)[number]) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="highlight-item reveal" ref={ref}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function ToolboxGroup({
  label,
  note,
  items,
}: (typeof toolbox)[number]) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="toolbox-group reveal" ref={ref}>
      <h3>{label}</h3>
      <p className="toolbox-note">{note}</p>
      <ul className="toolbox-tags">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function About() {
  usePageMeta(
    "About",
    `About ${site.name} — education, experience, toolbox, and what drives me.`,
  );

  const photoRef = useReveal<HTMLDivElement>();
  const bioRef = useReveal<HTMLDivElement>();
  const waysRef = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader
            as="h1"
            eyebrow="About"
            title={`Hi, I’m ${site.name}`}
            lead="I’m a Software Engineering student at UOW Malaysia with a Diploma in Computer Science from INTI. I care about building useful web and app experiences and keeping learning practical."
          />

          <div className="about-grid">
            <div className="about-photo reveal" ref={photoRef}>
              <img
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                width={680}
                height={800}
                loading="lazy"
              />
            </div>

            <div className="reveal" ref={bioRef}>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
                I enjoy turning ideas into working software — from coursework
                systems to small web products — and I’m always looking for ways
                to write clearer code and better interfaces.
              </p>

              <dl className="about-details">
                <div>
                  <dt>Name</dt>
                  <dd className="meta-row">
                    <UserIcon />
                    <span>{site.name}</span>
                  </dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd className="meta-row">
                    <LocationIcon />
                    <span>{site.location}</span>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a className="meta-row" href={`mailto:${site.email}`}>
                      <EmailIcon />
                      <span>{site.email}</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a
                      className="meta-row"
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PhoneIcon />
                      <span>{site.phone}</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Profiles</dt>
                  <dd className="about-socials">
                    {site.socials
                      .filter((s) => s.href)
                      .map((s) => (
                        <a
                          key={s.label}
                          className="meta-row"
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon label={s.label} />
                          <span>{s.label}</span>
                        </a>
                      ))}
                  </dd>
                </div>
              </dl>

              <a
                className="btn btn-primary"
                href={site.resume}
                download="EhZhongYu_Resume.pdf"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <MobileCollapse
            eyebrow="Path"
            title="Education & experience"
            lead="Milestones from school through diploma, internship, and bachelor studies."
          >
            <Timeline items={timeline} />
          </MobileCollapse>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <MobileCollapse
            eyebrow="Who I am"
            title="What I bring"
            lead="A clearer picture of how I work — building, data, engineering habits, and curiosity."
          >
            <div className="highlight-grid">
              {highlights.map((item) => (
                <HighlightItem key={item.title} {...item} />
              ))}
            </div>
          </MobileCollapse>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <MobileCollapse
            eyebrow="Toolbox"
            title="Technologies I’ve worked with"
            lead="Across coursework, projects, and internships — grouped by familiarity, not proficiency scores."
          >
            <div className="toolbox-grid">
              {toolbox.map((group) => (
                <ToolboxGroup key={group.label} {...group} />
              ))}
            </div>

            <div className="ways-block reveal" ref={waysRef}>
              <h3>Ways of working</h3>
              <p>
                Practices I try to carry into projects — software engineering
                habits and careful use of modern AI tools.
              </p>
              <ul className="toolbox-tags toolbox-tags--soft">
                {waysOfWorking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </MobileCollapse>
        </div>
      </section>
    </>
  );
}

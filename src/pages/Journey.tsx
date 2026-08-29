import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { degrees, hobbies, milestones } from "../data/journey";
import MobileCollapse from "../components/MobileCollapse";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";

function DegreeBlock({
  status,
  title,
  institution,
  period,
  description,
}: (typeof degrees)[number]) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="dossier-degree reveal" ref={ref}>
      <div className="dossier-degree-status">{status}</div>
      <h3>{title}</h3>
      <p className="dossier-degree-school">{institution}</p>
      <p className="dossier-degree-period">{period}</p>
      <p className="dossier-degree-copy">{description}</p>
    </article>
  );
}

function LogRow({
  period,
  title,
  category,
  description,
  href,
  hrefLabel,
}: (typeof milestones)[number]) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="dossier-log reveal" ref={ref}>
      <div className="dossier-log-side">
        <span>{category}</span>
        <span>{period}</span>
      </div>
      <div className="dossier-log-main">
        <h3>{title}</h3>
        <p>{description}</p>
        {href ? (
          <a
            className="journey-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hrefLabel ?? "Open"}
          </a>
        ) : null}
      </div>
    </article>
  );
}

function InterestRow({
  index,
  title,
  tagline,
  description,
}: (typeof hobbies)[number] & { index: number }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="dossier-interest reveal" ref={ref}>
      <span className="dossier-interest-num" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="dossier-interest-tag">{tagline}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function Journey() {
  usePageMeta(
    "Journey",
    `Studies, milestones, and hobbies of ${site.name} — Software Engineering at UOW Malaysia, diploma, speedcubing, Wing Chun, and gaming.`,
  );

  const introRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const section = document.getElementById(hash);
      const details =
        section instanceof HTMLDetailsElement
          ? section
          : section?.querySelector("details");
      if (details) details.open = true;
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="journey-page dossier">
      <header className="dossier-top">
        <div className="container">
          <div className="dossier-banner reveal" ref={introRef}>
            <div className="dossier-banner-rail" aria-hidden="true">
              <span>Journey</span>
            </div>
            <div className="dossier-banner-copy">
              <p className="dossier-banner-label">
                <span>01</span> Personal dossier
              </p>
              <h1>
                <span className="dossier-line">Studies &amp; milestones</span>
                <span className="dossier-line dossier-line--soft">
                  plus life offline
                </span>
              </h1>
              <p className="dossier-banner-lead">
                A compact record of what I’m studying, what I’ve done beyond
                class, and what I practise for focus and curiosity.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container dossier-layout">
        <aside className="dossier-nav" aria-label="Journey sections">
          <a href="#studies">Studies</a>
          <a href="#log">Log</a>
          <a href="#interests">Interests</a>
        </aside>

        <div className="dossier-main">
          <section
            id="studies"
            className="dossier-block"
            aria-labelledby="studies-heading"
          >
            <MobileCollapse
              className="dossier-collapse"
              title="Studies"
              headingId="studies-heading"
              lead="Formal education path — current bachelor and completed diploma."
            >
              <div className="dossier-degrees">
                {degrees.map((degree) => (
                  <DegreeBlock key={degree.title} {...degree} />
                ))}
              </div>
            </MobileCollapse>
          </section>

          <section
            id="log"
            className="dossier-block"
            aria-labelledby="log-heading"
          >
            <MobileCollapse
              className="dossier-collapse"
              title="Activity log"
              headingId="log-heading"
              lead="Internship, community work, and recognition."
            >
              <div className="dossier-logs">
                {milestones.map((item) => (
                  <LogRow key={item.title} {...item} />
                ))}
              </div>
            </MobileCollapse>
          </section>

          <section
            id="interests"
            className="dossier-block"
            aria-labelledby="interests-heading"
          >
            <MobileCollapse
              className="dossier-collapse"
              title="Interests"
              headingId="interests-heading"
              lead="Habits that shape how I learn and stay sharp."
            >
              <div className="dossier-interests">
                {hobbies.map((hobby, index) => (
                  <InterestRow key={hobby.id} index={index} {...hobby} />
                ))}
              </div>
            </MobileCollapse>
          </section>

          <div className="dossier-cta reveal" ref={ctaRef}>
            <h2>Say hello</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/contact">
                Contact form
              </Link>
              <Link className="btn btn-ghost" to="/about">
                About me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

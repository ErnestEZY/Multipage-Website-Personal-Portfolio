import { site } from "../data/site";
import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import SectionHeader from "../components/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  usePageMeta(
    "Contact",
    `Contact ${site.name} — send a message or reach out by email and phone.`,
  );

  const asideRef = useReveal<HTMLElement>();
  const formRef = useReveal<HTMLDivElement>();
  const faqRef = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          as="h1"
          eyebrow="Contact"
          title="Let’s talk"
          lead="Have a project, internship lead, or question? Send a message — I’ll get back when I can."
        />

        <div className="contact-grid">
          <aside className="contact-card reveal" ref={asideRef}>
            <h2 className="footer-title">Reach me directly</h2>
            <div className="contact-list">
              <div>
                <span>Location</span>
                <p>{site.location}</p>
              </div>
              <div>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <span>Phone</span>
                <a href={`tel:${site.phone.replace(/\s|-/g, "")}`}>
                  {site.phone}
                </a>
              </div>
            </div>
          </aside>

          <div className="reveal" ref={formRef}>
            <ContactForm />
          </div>
        </div>

        <div className="reveal" ref={faqRef} style={{ marginTop: "3.5rem" }}>
          <SectionHeader eyebrow="FAQ" title="Quick answers" />
          <Faq />
        </div>
      </div>
    </section>
  );
}

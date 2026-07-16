import { useState } from "react";
import { faqs } from "../data/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`faq-item${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="faq-trigger"
              id={`faq-trigger-${index}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{faq.question}</span>
              <span aria-hidden="true">{isOpen ? "–" : "+"}</span>
            </button>
            <div
              className="faq-panel"
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
            >
              <div className="faq-panel-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

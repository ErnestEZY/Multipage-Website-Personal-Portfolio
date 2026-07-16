import type { TimelineItem } from "../data/education";
import { useReveal } from "../hooks/useReveal";

function TimelineCard({ item }: { item: TimelineItem }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="timeline-item reveal" ref={ref}>
      <p className="timeline-period">{item.period}</p>
      <h3>{item.title}</h3>
      <p className="timeline-org">{item.org}</p>
      <p>{item.description}</p>
    </article>
  );
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <TimelineCard key={`${item.title}-${item.period}`} item={item} />
      ))}
    </div>
  );
}

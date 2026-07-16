import { useReveal } from "../hooks/useReveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  as?: "h1" | "h2";
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  as = "h2",
}: Props) {
  const ref = useReveal<HTMLElement>();

  return (
    <header className="section-header reveal" ref={ref}>
      <p className="section-eyebrow">{eyebrow}</p>
      {as === "h1" ? (
        <h1 className="section-title">{title}</h1>
      ) : (
        <h2 className="section-title">{title}</h2>
      )}
      {lead ? <p className="section-lead">{lead}</p> : null}
    </header>
  );
}

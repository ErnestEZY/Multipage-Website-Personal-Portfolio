import type { ReactNode, SyntheticEvent } from "react";
import { useDesktop } from "../hooks/useDesktop";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  headingId?: string;
  children: ReactNode;
  className?: string;
};

export default function MobileCollapse({
  id,
  eyebrow,
  title,
  lead,
  headingId,
  children,
  className,
}: Props) {
  const desktop = useDesktop();

  const onToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    if (desktop) {
      event.currentTarget.open = true;
    }
  };

  return (
    <details
      id={id}
      className={`mobile-collapse${className ? ` ${className}` : ""}`}
      {...(desktop ? { open: true } : {})}
      onToggle={onToggle}
    >
      <summary className="mobile-collapse-summary">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
        <span className="mobile-collapse-chevron" aria-hidden="true" />
      </summary>
      <div className="mobile-collapse-body">{children}</div>
    </details>
  );
}

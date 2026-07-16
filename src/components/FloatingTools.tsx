import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ScrollTop from "./ScrollTop";

export default function FloatingTools() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setExpanded(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`floating-tools${expanded ? " is-expanded" : ""}`}
      role="group"
      aria-label="Display and navigation controls"
    >
      <ThemeToggle />
      <ScrollTop visible={expanded} />
    </div>
  );
}

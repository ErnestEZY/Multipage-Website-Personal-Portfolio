type Props = {
  visible: boolean;
};

export default function ScrollTop({ visible }: Props) {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <button
      type="button"
      className={`floating-control scroll-top${visible ? " is-visible" : ""}`}
      aria-label="Scroll to top"
      title="Go to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reducedMotion ? "auto" : "smooth",
        })
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 9.41l-4.59 4.59L6 12l6-6 6 6-1.41 1.41L12 9.41z" />
      </svg>
    </button>
  );
}

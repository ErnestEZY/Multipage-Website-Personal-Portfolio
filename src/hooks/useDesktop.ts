import { useEffect, useState } from "react";

const QUERY = "(min-width: 880px)";

export function useDesktop() {
  const [desktop, setDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(QUERY).matches : true,
  );

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}

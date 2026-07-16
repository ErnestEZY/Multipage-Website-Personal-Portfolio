import { useEffect } from "react";
import { site } from "../data/site";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title =
      title === "Home" ? `${site.brand} · Portfolio` : `${title} · ${site.brand}`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);
}

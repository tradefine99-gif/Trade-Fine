import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Target element may not exist yet on first paint after a route change,
      // so retry briefly instead of failing silently.
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 20) {
          attempts += 1;
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useRevealOnScroll() {
  const location = useLocation();

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => {
      item.classList.remove("is-visible");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [location.hash, location.pathname]);
}

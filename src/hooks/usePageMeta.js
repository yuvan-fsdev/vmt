import { useEffect } from "react";

export default function usePageMeta({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    }

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    }

    if (keywords) {
      document.querySelector('meta[name="keywords"]')?.setAttribute("content", keywords);
    }
  }, [description, keywords, title]);
}

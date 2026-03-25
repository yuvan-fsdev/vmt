import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppShell from "./components/AppShell";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (location.hash) {
      const id = location.hash.slice(1);
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior });
  }, [location.hash, location.pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="section">
        <div className="container">
          <div className="not-found-card" data-reveal>
            <span className="eyebrow">Route placeholder</span>
            <h1>Page not found</h1>
            <p>
              The app is now structured for future routes. Add new pages under <code>src/pages</code> and
              register them in <code>src/App.jsx</code>.
            </p>
            <Link className="btn btn-primary" to="/">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

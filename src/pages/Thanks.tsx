import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <section className="frosted-panel mx-auto mt-16 max-w-3xl rounded-[32px] p-8 text-center sm:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--text-soft)]">
        Thanks
      </p>
      <h1 className="mt-4 font-orbitron text-3xl font-semibold text-[color:var(--text-strong)] sm:text-4xl">
        Message received
      </h1>
      <p className="mt-4 text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
        I have your details and will be in touch soon. In the meantime, feel
        free to explore the rest of the portfolio.
      </p>
      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-strong)] transition hover:bg-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

const designs = [
  {
    title: "One-page brand site",
    description:
      "A bold hero, service highlights, and a strong call-to-action for quick launches.",
    linkHref: "/website-designs/one-page-brand-site",
  },
  {
    title: "Service studio",
    description:
      "Detailed sections for offerings, process, and testimonials in a clean layout.",
    linkHref: "/website-designs/service-studio",
  },
  {
    title: "Online storefront",
    description:
      "Retail-first layout for products, collections, and smooth checkout paths.",
    linkHref: "/website-designs/online-storefront",
  },
  {
    title: "Event landing",
    description:
      "Event-driven page with schedule, speakers, and ticket conversion blocks.",
    linkHref: "/website-designs/event-landing",
  },
];

export default function WebsiteDesigns() {
  return (
    <section className="space-y-10">
      <header className="space-y-4 text-center sm:text-left">
        <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          Template Library
        </p>
        <h1 className="font-orbitron text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
          Website Designs
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)]">
          Pick a starting point before requesting a custom build or template swap.
        </p>
      </header>

      <div className="frosted-panel rounded-[32px] p-6 sm:p-8">
        <div className="mb-8">
          <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            One page designs
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {designs.map((design) => (
            <Link
              key={design.title}
              to={design.linkHref}
              className="group frosted-card rounded-2xl p-6 transition-all duration-300 hover:border-[color:var(--accent)] hover:shadow-[0_0_24px_var(--accent-soft)]"
            >
              <h3 className="font-orbitron text-lg font-semibold text-[color:var(--text-strong)] transition group-hover:text-[color:var(--accent)]">
                {design.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-soft)]">
                {design.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="frosted-panel rounded-[28px] px-6 py-5 text-center text-sm text-[color:var(--text-soft)]">
        Can't pick between your favourite designs? Let's make a{" "}
        <Link
          to="/contact?service=custom-web-page-design"
          className="font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--text-strong)]"
        >
          custom page!
        </Link>
      </div>
    </section>
  );
}

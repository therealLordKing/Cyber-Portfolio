import { useState } from "react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Phantom Packet Lab",
    summary:
      "Built a packet analysis workflow that correlates DNS anomalies with endpoint telemetry for rapid triage.",
    details:
      "Expanded analysis includes anomaly baselines, alert tuning notes, and a repeatable checklist for fast packet triage.",
    tags: ["Network Forensics", "Wireshark"],
  },
  {
    title: "Zero-Trust Access Audit",
    summary:
      "Mapped privileged access paths and reduced standing permissions by 43% with least-privilege guardrails.",
    details:
      "Full notes cover identity reviews, access mapping, and the policy changes used to enforce least-privilege access.",
    tags: ["Identity", "Zero Trust"],
  },
  {
    title: "Adversary Emulation Sprint",
    summary:
      "Simulated a multi-stage intrusion and delivered detections with MITRE ATT&CK coverage gaps.",
    details:
      "Long-form details include attack flow diagrams, detection notes, and follow-up tasks for coverage improvements.",
    tags: ["Detection", "ATT&CK"],
  },
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      <section className="frosted-panel relative overflow-hidden rounded-[32px] px-6 py-12 sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--accent)] opacity-20 blur-[120px]" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-6">
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Security-led digital studio
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">
                Cybersecurity creator crafting resilient experiences
              </h1>
              <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
                I build practical cybersecurity content, document real systems,
                and design sites that look sharp while respecting security
                fundamentals. The work spans web applications, electronics, and
                tooling that helps teams move faster without losing visibility.
              </p>
              <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
                I also offer website design and security reviews with a focus on
                clean architecture, hardening checklists, and clear risk
                communication. Every engagement starts with a free, rapid review
                of layout clarity and baseline security posture.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-[color:var(--accent)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text-strong)] transition hover:bg-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-[color:var(--border)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
              >
                Start a project
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
              <span>Design systems</span>
              <span>Security reviews</span>
              <span>Threat-aware content</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="frosted-card rounded-3xl p-6">
              <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
                What you get
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[color:var(--text-strong)]">
                Engagements built for clarity and speed
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-soft)]">
                <li>Security-first layouts with modern visual polish.</li>
                <li>Threat-aware walkthroughs and incident-ready notes.</li>
                <li>Clear architecture documentation for handoff.</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Average review window", value: "48 hrs" },
                { label: "Case studies", value: "12+" },
                { label: "Security checklists", value: "25+" },
                { label: "Global collaborators", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="frosted-card rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[color:var(--text-strong)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Featured work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
              High-performance security engagements
            </h2>
          </div>
          <Link
            to="/projects"
            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            View all
          </Link>
        </div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {(expandedProject
            ? featuredProjects.filter(
                (project) => project.title === expandedProject
              )
            : featuredProjects
          ).map((project) => {
            const isExpanded = expandedProject === project.title;

            return (
              <li
                key={project.title}
                className={`relative ${isExpanded ? "lg:col-span-3" : ""}`}
              >
                {isExpanded ? (
                  <button
                    type="button"
                    onClick={() => setExpandedProject(null)}
                    className="absolute right-6 top-6 z-10 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-1)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    Back
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.title)
                  }
                  aria-expanded={isExpanded}
                  className={`group frosted-card interactive-card flex h-full w-full flex-col justify-between rounded-3xl p-6 text-left transition-all duration-300 ${
                    isExpanded
                      ? "is-active is-expanded no-hover-glow"
                      : "hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-2)]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                      {project.summary}
                    </p>
                    <p
                      className={`expandable-details text-xs text-[color:var(--text-muted)] ${
                        isExpanded ? "details-open mt-3" : ""
                      } overflow-hidden`}
                    >
                      {project.details}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="frosted-panel relative overflow-hidden rounded-[32px] px-6 py-10 sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--accent-soft),_transparent_55%)]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Next steps
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
              Ready for the full portfolio deep dive?
            </h2>
            <p className="text-sm text-[color:var(--text-soft)]">
              Review the case studies or start a security-led design engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-[color:var(--accent)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text-strong)] transition hover:bg-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
            >
              Explore case studies
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-[color:var(--border)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
            >
              Book a review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

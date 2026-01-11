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
          <div className="space-y-6 text-center sm:text-left">
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Security-led digital studio
            </p>
            <div className="space-y-4">
              <h1 className="font-orbitron text-4xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">
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
            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
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
              <Link
                to="/contact"
                className="rounded-full border border-[color:var(--border)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
              >
                Custom solutions
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--text-strong)] sm:justify-start">
              <span>Average review window</span>
              <span>48 hrs</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="frosted-card rounded-3xl p-6 text-center sm:text-left">
              <h2 className="font-orbitron text-2xl font-bold tracking-[0.14em] text-[color:var(--text-strong)] sm:text-3xl">
                Need a secure website?
              </h2>
              <p className="mt-4 font-orbitron text-base tracking-[0.08em] text-[color:var(--text-soft)] sm:text-lg">
                <Link
                  to="/contact"
                  className="text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
                >
                  Contact
                </Link>{" "}
                me with your preferred website design, or{" "}
                <Link
                  to="/contact#design-input"
                  className="text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
                >
                  design your own
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Security tools",
                  color: "text-[color:var(--accent)]",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-12 w-12"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M5 4.5h14a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 16.5H5A2.5 2.5 0 0 1 2.5 14V7A2.5 2.5 0 0 1 5 4.5Z" />
                      <path d="M8 18.5h8a1 1 0 0 1 1 1v.5H7v-.5a1 1 0 0 1 1-1Z" />
                    </svg>
                  ),
                },
                {
                  label: "Case studies",
                  color: "text-[color:var(--accent-strong)]",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-12 w-12"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M7 3.5h7.5L20.5 9v9.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
                      <path d="M14.5 3.5V9H20" />
                      <rect x="8" y="11" width="8.5" height="1.6" rx=".8" />
                      <rect x="8" y="14.2" width="6.5" height="1.6" rx=".8" />
                      <path d="M8 18h7.5" />
                    </svg>
                  ),
                },
                {
                  label: "Security checklists",
                  color: "text-[#34d399]",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-12 w-12"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M6.5 4.5h11a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
                      <path d="m7.5 9.2 1.2 1.2 2.2-2.2" fill="#0b1220" />
                      <rect x="11.2" y="9" width="6" height="1.6" rx=".8" fill="#0b1220" />
                      <rect x="7.5" y="13" width="9.7" height="1.6" rx=".8" fill="#0b1220" />
                      <rect x="7.5" y="16.5" width="9.7" height="1.6" rx=".8" fill="#0b1220" />
                    </svg>
                  ),
                },
                {
                  label: "Custom scripts",
                  color: "text-[#f59e0b]",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-12 w-12"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M5 5.5h14a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 19 18.5H5A2.5 2.5 0 0 1 2.5 16V8A2.5 2.5 0 0 1 5 5.5Z" />
                      <path d="M7.3 10.5 10 13.2l-2.7 2.7" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="12.5" y="15" width="4.5" height="1.8" rx=".9" fill="#0b1220" />
                    </svg>
                  ),
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="frosted-card flex min-h-[160px] flex-col justify-between rounded-2xl p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--text-strong)]">
                    {stat.label}
                  </p>
                  <div className={`mt-4 flex justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="space-y-2">
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Featured work
            </p>
            <h2 className="font-orbitron text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
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
                      <h3 className="font-orbitron text-xl font-bold text-[color:var(--text-strong)]">
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
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="space-y-2">
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Next steps
            </p>
            <h2 className="font-orbitron text-2xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
              Ready for the full portfolio deep dive?
            </h2>
            <p className="text-sm text-[color:var(--text-soft)]">
              Review the case studies or start a security-led design engagement.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
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

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
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 py-12 sm:px-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
           Often136 
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              cybersecurity freelancer, content creator and web designer 
            </h1>
            <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
             I create practical content focused on cybersecurity and security-oriented electronics. My work documents how real systems are built, where they fail, and how to secure them — from web applications to hardware-assisted security projects.
             </p>
             <p className="text-base leading-relaxed text-slate-200 sm:text-lg"> 
             I offer web design and website security review services, with a focus on clean architecture, basic hardening, and common misconfiguration risks. If you already have a website, I provide a free initial review covering layout clarity and security fundamentals. 
             </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Featured Projects
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              High-impact security work
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-semibold text-slate-200 transition hover:text-sky-300"
          >
            View all
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => {
            const isExpanded = expandedProject === project.title;

            return (
              <li key={project.title}>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.title)
                  }
                  aria-expanded={isExpanded}
                  className={`group flex h-full w-full flex-col justify-between rounded-2xl border p-6 text-left transition-all duration-300 ${
                    isExpanded
                      ? "border-sky-500 bg-slate-800 shadow-lg shadow-slate-900/60"
                      : "border-slate-800 bg-slate-900 hover:border-slate-600 hover:bg-slate-800 hover:shadow-sm hover:shadow-slate-900/50"
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {project.summary}
                    </p>
                    <p
                      className={`text-xs text-slate-400 transition-all duration-300 ${
                        isExpanded
                          ? "mt-3 max-h-[320px] opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      {project.details}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200"
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

      <section className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Ready to explore the full portfolio?
          </h2>
          <p className="text-sm text-slate-300">
            Browse detailed case studies or reach out to collaborate.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}

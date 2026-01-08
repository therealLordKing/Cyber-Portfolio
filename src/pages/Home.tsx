import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Phantom Packet Lab",
    summary:
      "Built a packet analysis workflow that correlates DNS anomalies with endpoint telemetry for rapid triage.",
    tags: ["Network Forensics", "Wireshark"],
  },
  {
    title: "Zero-Trust Access Audit",
    summary:
      "Mapped privileged access paths and reduced standing permissions by 43% with least-privilege guardrails.",
    tags: ["Identity", "Zero Trust"],
  },
  {
    title: "Adversary Emulation Sprint",
    summary:
      "Simulated a multi-stage intrusion and delivered detections with MITRE ATT&CK coverage gaps.",
    tags: ["Detection", "ATT&CK"],
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-b from-white via-white to-zinc-50 px-6 py-12 sm:px-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
           Often136 
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              cybersecurity freelancer, content creator and web designer 
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
             I create practical content on cybersecurity, home labs, and electronics. I am focused on teaching real skills,
             showcasing projects, and documenting the learning process from the ground up. 
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Featured Projects
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              High-impact security work
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-semibold text-zinc-700 transition hover:text-zinc-950"
          >
            View all
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <li
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-sm"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-950">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {project.summary}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Ready to explore the full portfolio?
          </h2>
          <p className="text-sm text-zinc-600">
            Browse detailed case studies or reach out to collaborate.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}

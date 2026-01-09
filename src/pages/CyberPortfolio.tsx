import SectionGrid from "../components/SectionGrid";

export default function CyberPortfolio() {
  return (
    <SectionGrid
      title="Cyber Portfolio"
      description="Dedicated space for cybersecurity-specific projects, tools, and custom scripts."
      eyebrow="Cyber Projects"
      sectionTitle="Tools and builds"
      badge="Updated as projects ship"
      items={[
        {
          title: "Custom scripts",
          description:
            "Automation helpers for log parsing, alert triage, and routine security checks.",
          details:
            "Expanded notes will include script goals, usage examples, and dependencies.",
          tags: ["Automation", "Python"],
        },
        {
          title: "Security tools",
          description:
            "Focused utilities for reconnaissance, verification, and rapid validation.",
          details:
            "Each entry will outline the workflow, sample outputs, and future enhancements.",
          tags: ["Tooling", "CLI"],
        },
        {
          title: "Detection experiments",
          description:
            "Hands-on detection prototypes with repeatable testing workflows.",
          details:
            "Coverage maps, test cases, and detection logic notes will live here.",
          tags: ["Detection", "Labs"],
        },
        {
          title: "Incident playbooks",
          description:
            "Response playbooks and checklists built from real-world scenarios.",
          details:
            "Playbooks will expand with timelines, communications, and post-incident tasks.",
          tags: ["Response", "Process"],
        },
        {
          title: "Research notes",
          description:
            "Focused write-ups on techniques, vulnerabilities, and defensive tactics.",
          details:
            "Long-form notes will document findings, resources, and repeatable steps.",
          tags: ["Research", "Notes"],
        },
        {
          title: "Coming soon",
          description:
            "More cyber-specific tooling and experiments are queued for release.",
          details:
            "New work will add documentation, screenshots, and step-by-step guidance.",
          tags: ["In progress"],
        },
      ]}
    />
  );
}

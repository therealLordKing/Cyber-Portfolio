import SectionGrid from "../components/SectionGrid";

export default function About() {
  return (
    <SectionGrid
      title="About"
      description="Background, focus areas, and how I approach cybersecurity and web work."
      eyebrow="About"
      sectionTitle="Story and focus"
      badge="Updated quarterly"
      items={[
        {
          title: "Professional summary",
          description:
            "A snapshot of my experience across cybersecurity, education, and client work.",
          details:
            "This section will expand into a timeline, role highlights, and the outcomes delivered.",
          tags: ["Background", "Experience"],
        },
        {
          title: "Focus areas",
          description:
            "Detection engineering, practical security testing, and hands-on labs.",
          details:
            "Expect deeper notes on tooling, methodologies, and the types of problems I solve.",
          tags: ["Security", "Labs"],
        },
        {
          title: "What I'm building",
          description:
            "Ongoing projects, content plans, and the next milestones for the portfolio.",
          details:
            "Long-form planning notes, upcoming releases, and roadmap updates will live here.",
          tags: ["Roadmap", "Content"],
        },
      ]}
    />
  );
}

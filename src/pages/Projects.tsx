import SectionGrid from "../components/SectionGrid";

export default function Projects() {
  return (
    <SectionGrid
      title="Projects"
      description="A focused look at the security, electronics, and lab work that I document and publish."
      eyebrow="Project Library"
      sectionTitle="Featured sections"
      badge="New entries monthly"
      items={[
        {
          title: "Electronics",
          description:
            "Build notes, schematics, and teardown write-ups from practical electronics experiments.",
          details:
            "Includes parts lists, wiring diagrams, and lessons learned from each hardware build.",
          tags: ["Hardware", "Prototyping"],
        },
        {
          title: "Home lab setups",
          description:
            "Network diagrams, server stacks, and walkthroughs for realistic lab environments.",
          details:
            "Expanded notes cover topology choices, hardware specs, and the lab services that run on top.",
          tags: ["Infrastructure", "Networking"],
        },
        {
          title: "Coming soon",
          description:
            "More project categories and long-form case studies are in progress.",
          details:
            "New sections will include deep-dive write-ups with repeatable workflows and tooling notes.",
          tags: ["In progress"],
        },
      ]}
    />
  );
}

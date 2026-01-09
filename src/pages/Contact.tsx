import SectionGrid from "../components/SectionGrid";

export default function Contact() {
  return (
    <SectionGrid
      title="Contact"
      description="Reach out for collaborations, security reviews, or website projects."
      eyebrow="Contact"
      sectionTitle="Ways to connect"
      badge="Responses within 48 hours"
      items={[
        {
          title: "Email",
          description:
            "Send a brief outline of your project or question to start the conversation.",
          details:
            "Share the scope, timeline, and any must-have requirements so I can respond quickly.",
          tags: ["Primary", "Fastest"],
        },
        {
          title: "Social links",
          description:
            "Follow ongoing work and announcements across the platforms listed here.",
          details:
            "Platform updates will include build logs, design drops, and upcoming collaboration slots.",
          tags: ["Updates", "Community"],
        },
        {
          title: "Availability",
          description:
            "Current capacity for audits, builds, and content collaborations.",
          details:
            "Expanded details will outline lead times, retainer options, and intake requirements.",
          tags: ["Scheduling"],
        },
      ]}
    />
  );
}

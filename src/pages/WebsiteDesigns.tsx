import SectionGrid from "../components/SectionGrid";

export default function WebsiteDesigns() {
  return (
    <SectionGrid
      title="Website Designs"
      description="Pick a starting point before requesting a custom build or template swap."
      eyebrow="Template Library"
      sectionTitle="Browse styles"
      badge="Previews launching soon"
      items={[
        {
          title: "One-page brand site",
          description:
            "A bold hero, service highlights, and a strong call-to-action for quick launches.",
          details:
            "Includes layout notes, typography choices, and ideal use cases for fast conversions.",
          tags: ["Landing", "Business"],
        },
        {
          title: "Portfolio grid",
          description:
            "Gallery-first layout for showcasing projects, case studies, or creative work.",
          details:
            "Detailed components cover image grids, project filters, and spotlight sections.",
          tags: ["Showcase", "Visual"],
        },
        {
          title: "Service studio",
          description:
            "Detailed sections for offerings, process, and testimonials in a clean layout.",
          details:
            "Expanded plans cover service tiers, intake forms, and testimonial layouts.",
          tags: ["Services", "Trust"],
        },
        {
          title: "Product release",
          description:
            "Launch-ready template with feature blocks, pricing, and onboarding steps.",
          details:
            "Expect full content outlines for pricing tables, launch timelines, and FAQs.",
          tags: ["Product", "Launch"],
        },
        {
          title: "Content hub",
          description:
            "Editorial structure for articles, guides, and resource libraries.",
          details:
            "Includes category navigation, editorial grids, and newsletter sign-up blocks.",
          tags: ["Editorial", "Resources"],
        },
        {
          title: "Coming soon",
          description:
            "Additional templates and industry-specific layouts are on the way.",
          details:
            "More layouts will cover startups, agencies, and ecommerce storefronts.",
          tags: ["In progress"],
        },
      ]}
    />
  );
}

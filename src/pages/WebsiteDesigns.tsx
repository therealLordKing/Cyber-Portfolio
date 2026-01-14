import { Link } from "react-router-dom";
import SectionGrid from "../components/SectionGrid";

export default function WebsiteDesigns() {
  return (
    <>
      <SectionGrid
        title="Website Designs"
        description="Pick a starting point before requesting a custom build or template swap."
        eyebrow="Template Library"
        sectionTitle="Browse styles"
        badge=""
        headerCard={{
          title: "Ready to make this real?",
          description: (
            <>
              Let's fill out your design form in the{" "}
            <Link
              to="/design-hub?service=website-design"
              className="font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--text-strong)]"
            >
              design hub
            </Link>
              .
            </>
          ),
        }}
        items={[
          {
            title: "One-page brand site",
            description:
              "A bold hero, service highlights, and a strong call-to-action for quick launches.",
            details:
              "Includes layout notes, typography choices, and ideal use cases for fast conversions.",
            tags: ["Landing", "Business"],
            linkHref: "/website-designs/one-page-brand-site",
          },
          {
            title: "Portfolio grid",
            description:
              "Gallery-first layout for showcasing projects, case studies, or creative work.",
            details:
              "Detailed components cover image grids, project filters, and spotlight sections.",
            tags: ["Showcase", "Visual"],
            linkHref: "/website-designs/portfolio-grid",
          },
          {
            title: "Service studio",
            description:
              "Detailed sections for offerings, process, and testimonials in a clean layout.",
            details:
              "Expanded plans cover service tiers, intake forms, and testimonial layouts.",
            tags: ["Services", "Trust"],
            linkHref: "/website-designs/service-studio",
          },
          {
            title: "Product release",
            description:
              "Launch-ready template with feature blocks, pricing, and onboarding steps.",
            details:
              "Expect full content outlines for pricing tables, launch timelines, and FAQs.",
            tags: ["Product", "Launch"],
            linkHref: "/website-designs/product-release",
          },
          {
            title: "Content hub",
            description:
              "Editorial structure for articles, guides, and resource libraries.",
            details:
              "Includes category navigation, editorial grids, and newsletter sign-up blocks.",
            tags: ["Editorial", "Resources"],
            linkHref: "/website-designs/content-hub",
          },
          {
            title: "Startup SaaS",
            description:
              "Product-led layout for a SaaS launch with clear value props and demos.",
            details:
              "Flow includes feature snapshots, pricing tiers, and conversion-ready CTAs.",
            tags: ["SaaS", "Conversion"],
            linkHref: "/website-designs/startup-saas",
          },
          {
            title: "Ecommerce storefront",
            description:
              "Retail-first layout for products, collections, and smooth checkout paths.",
            details:
              "Highlights hero offers, collection rows, and product story sections.",
            tags: ["Ecommerce", "Retail"],
            linkHref: "/website-designs/ecommerce-storefront",
          },
          {
            title: "Event landing",
            description:
              "Event-driven page with schedule, speakers, and ticket conversion blocks.",
            details:
              "Includes agenda flow, speaker spotlights, and ticketing prompts.",
            tags: ["Event", "Launch"],
            linkHref: "/website-designs/event-landing",
          },
          {
            title: "Coming soon",
            description:
              "Additional templates and industry-specific layouts are on the way.",
            details:
              "More layouts will cover startups, agencies, and ecommerce storefronts.",
            tags: ["In progress"],
            linkHref: "/website-designs/coming-soon",
          },
        ]}
      />
      <section className="mt-10 text-center">
        <div className="frosted-panel rounded-[28px] px-6 py-5 text-sm text-[color:var(--text-soft)]">
          Can't pick between your favourite designs? Let's make a{" "}
          <Link
            to="/contact?service=custom-web-page-design"
            className="font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--text-strong)]"
          >
            custom page!
          </Link>
        </div>
      </section>
    </>
  );
}

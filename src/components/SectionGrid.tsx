import { useState } from "react";

type SectionItem = {
  title: string;
  description: string;
  details?: string;
  tags?: string[];
};

type SectionGridProps = {
  title: string;
  description: string;
  eyebrow: string;
  sectionTitle: string;
  badge: string;
  items: SectionItem[];
};

export default function SectionGrid({
  title,
  description,
  eyebrow,
  sectionTitle,
  badge,
  items,
}: SectionGridProps) {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  return (
    <section className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div className="space-y-4">
          <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)]">
            {description}
          </p>
        </div>
        <div className="frosted-panel rounded-3xl p-6">
          <p className="text-sm text-[color:var(--text-soft)]">Focus area</p>
          <h2 className="mt-2 text-xl font-semibold text-[color:var(--text-strong)]">
            {sectionTitle}
          </h2>
          <span className="mt-4 inline-flex rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
            {badge}
          </span>
        </div>
      </div>

      <div className="frosted-panel rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              {eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[color:var(--text-strong)]">
              {sectionTitle}
            </h3>
          </div>
          <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
            {badge}
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(expandedTitle
            ? items.filter((item) => item.title === expandedTitle)
            : items
          ).map((item) => {
            const isExpanded = expandedTitle === item.title;
            const detailsText = item.details ?? item.description;

            return (
              <div
                key={item.title}
                className={`relative ${isExpanded ? "lg:col-span-3 sm:col-span-2" : ""}`}
              >
                {isExpanded ? (
                  <button
                    type="button"
                    onClick={() => setExpandedTitle(null)}
                    className="absolute right-5 top-5 z-10 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-1)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    Back
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedTitle(isExpanded ? null : item.title)
                  }
                  aria-expanded={isExpanded}
                  className={`frosted-card interactive-card flex min-h-[180px] w-full flex-col justify-between rounded-3xl p-5 text-left text-sm text-[color:var(--text)] transition-all duration-300 ${
                    isExpanded
                      ? "is-active is-expanded no-hover-glow"
                      : "hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-2)]"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="text-lg font-semibold text-[color:var(--text-strong)]">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                      {item.description}
                    </p>
                    <p
                      className={`expandable-details text-xs text-[color:var(--text-muted)] ${
                        isExpanded ? "details-open mt-3" : ""
                      } overflow-hidden`}
                    >
                      {detailsText}
                    </p>
                  </div>
                  {item.tags && item.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[color:var(--border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import type { ReactNode } from "react";

type SectionItem = {
  icon?: ReactNode;
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
  showFocusCard?: boolean;
  itemVariant?: "default" | "compact";
};

export default function SectionGrid({
  title,
  description,
  eyebrow,
  sectionTitle,
  badge,
  items,
  showFocusCard = false,
  itemVariant = "default",
}: SectionGridProps) {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const isCompact = itemVariant === "compact";

  return (
    <section className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div className="space-y-4">
          <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            {eyebrow}
          </p>
          <h1 className="font-orbitron text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)]">
            {description}
          </p>
        </div>
        {showFocusCard ? (
          <div className="frosted-panel rounded-3xl p-6">
            <p className="text-sm text-[color:var(--text-soft)]">Focus area</p>
            <h2 className="mt-2 font-orbitron text-xl font-semibold text-[color:var(--text-strong)]">
              {sectionTitle}
            </h2>
            <span className="mt-4 inline-flex rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              {badge}
            </span>
          </div>
        ) : null}
      </div>

      <div className="frosted-panel rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              {eyebrow}
            </p>
            <h3 className="mt-2 font-orbitron text-2xl font-semibold text-[color:var(--text-strong)]">
              {sectionTitle}
            </h3>
          </div>
          <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
            {badge}
          </span>
        </div>

        <div
          className={`mt-8 grid gap-5 ${
            isCompact ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {(expandedTitle
            ? items.filter((item) => item.title === expandedTitle)
            : items
          ).map((item) => {
            const isExpanded = expandedTitle === item.title;
            const detailsText = item.details ?? item.description;

            return (
              <div
                key={item.title}
                className={`relative ${isExpanded && !isCompact ? "lg:col-span-3 sm:col-span-2" : ""}`}
              >
                {isExpanded && !isCompact ? (
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
                  className={`frosted-card interactive-card flex w-full text-left text-sm text-[color:var(--text)] transition-all duration-300 ${
                    isCompact
                      ? "min-h-[120px] flex-col justify-between rounded-2xl p-4"
                      : "min-h-[180px] flex-col justify-between rounded-3xl p-5"
                  } ${
                    isExpanded && !isCompact
                      ? "is-active is-expanded no-hover-glow"
                      : "hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-2)]"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {item.icon ? (
                          <div
                            className={`flex items-center justify-center border border-[color:var(--border)] bg-[color:var(--surface-2)] text-[color:var(--text-strong)] ${
                              isCompact ? "h-9 w-9 rounded-xl" : "h-10 w-10 rounded-2xl"
                            }`}
                          >
                            {item.icon}
                          </div>
                        ) : null}
                        <div
                          className={`font-bold text-[color:var(--text-strong)] ${
                            isCompact ? "text-base" : "text-lg"
                          }`}
                        >
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                      {item.description}
                    </p>
                    {!isCompact ? (
                      <p
                        className={`expandable-details text-xs text-[color:var(--text-muted)] ${
                          isExpanded ? "details-open mt-3" : ""
                        } overflow-hidden`}
                      >
                        {detailsText}
                      </p>
                    ) : null}
                  </div>
                  {!isCompact && item.tags && item.tags.length > 0 ? (
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

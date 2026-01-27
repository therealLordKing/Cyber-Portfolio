import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type SectionItem = {
  icon?: ReactNode;
  title: string;
  description: string;
  details?: string;
  tags?: string[];
  href?: string;
  linkHref?: string;
  linkLabel?: string;
  content?: ReactNode;
};

type SectionGridProps = {
  title: string;
  description: string;
  eyebrow: string;
  sectionTitle: string;
  badge?: string;
  items: SectionItem[];
  showFocusCard?: boolean;
  itemVariant?: "default" | "compact";
  headerCard?: {
    title: string;
    description?: ReactNode;
  };
};

type CardContentProps = {
  item: SectionItem;
  isCompact: boolean;
  isExpanded: boolean;
  detailsText: string;
};

function CardContent({ item, isCompact, isExpanded, detailsText }: CardContentProps) {
  return (
    <>
      <div className="space-y-2">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {item.icon ? (
              <div
                className={`flex items-center justify-center border border-[color:var(--border)] bg-[color:var(--surface-2)] text-[color:var(--text-strong)] ${
                  isCompact ? "h-8 w-8 rounded-md" : "h-10 w-10 rounded-lg"
                }`}
              >
                {item.icon}
              </div>
            ) : null}
            <div
              className={`font-bold text-[color:var(--text-strong)] ${
                isCompact ? "text-sm" : "text-lg"
              }`}
            >
              {item.title}
            </div>
          </div>
        </div>
        {item.content ? (
          <div className="text-sm text-[color:var(--text-soft)]">
            {item.content}
          </div>
        ) : item.description ? (
          <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
            {item.description}
          </p>
        ) : null}
        {!isCompact && !item.content ? (
          <p
            className={`expandable-details text-xs text-[color:var(--text-muted)] ${
              isExpanded ? "details-open mt-3" : ""
            } overflow-hidden`}
          >
            {detailsText}
          </p>
        ) : null}
      </div>
      {!isCompact ? (
        <div className="mt-4 space-y-3">
          {item.tags && item.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-chip px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default function SectionGrid({
  title,
  description,
  eyebrow,
  sectionTitle,
  badge,
  items,
  showFocusCard = false,
  itemVariant = "default",
  headerCard,
}: SectionGridProps) {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const isCompact = itemVariant === "compact";
  const hasRightCard = showFocusCard || Boolean(headerCard);

  return (
    <section className="space-y-10">
      <div
        className={`grid gap-6 ${
          hasRightCard
            ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end"
            : ""
        }`}
      >
        <div className="space-y-4 text-left">
          <h1 className="font-orbitron text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)]">
            {description}
          </p>
        </div>
        {headerCard ? (
          <div className="frosted-panel rounded-3xl p-6 text-center sm:text-left">
            <h2 className="font-orbitron text-2xl font-semibold text-[color:var(--text-strong)]">
              {headerCard.title}
            </h2>
            {headerCard.description ? (
              <p className="mt-3 text-base text-[color:var(--text-soft)]">
                {headerCard.description}
              </p>
            ) : null}
          </div>
        ) : showFocusCard ? (
          <div className="frosted-panel rounded-3xl p-6 text-center sm:text-left">
            <p className="text-sm text-[color:var(--text-soft)]">Focus area</p>
            <h2 className="mt-2 font-orbitron text-xl font-semibold text-[color:var(--text-strong)]">
              {sectionTitle}
            </h2>
            {badge ? (
              <span className="mt-4 inline-flex rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                {badge}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="frosted-panel rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="font-orbitron text-2xl font-semibold text-[color:var(--text-strong)]">
              {sectionTitle}
            </h3>
          </div>
          {badge ? (
            <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              {badge}
            </span>
          ) : null}
        </div>

        <div
          className={`mt-8 grid gap-5 ${
            isCompact ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {(isCompact || !expandedTitle
            ? items
            : items.filter((item) => item.title === expandedTitle)
          ).map((item) => {
            const hasRouterLink = Boolean(item.linkHref);
            const hasAnchorLink = Boolean(item.href);
            const canExpand = !isCompact && !hasRouterLink && !hasAnchorLink;
            const isExpanded = canExpand && expandedTitle === item.title;
            const detailsText = item.details ?? item.description;
            const cardClassName = `frosted-card interactive-card flex w-full text-left text-sm text-[color:var(--text)] transition-all duration-300 ${
              isCompact
                ? "min-h-[96px] flex-col justify-between rounded-xl p-3"
                : "min-h-[180px] flex-col justify-between rounded-xl p-5"
            } ${
              isExpanded && !isCompact
                ? "is-active is-expanded no-hover-glow"
                : "hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-2)]"
            }`;

            const cardContentProps = { item, isCompact, isExpanded, detailsText };

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
                {hasRouterLink ? (
                  <Link to={item.linkHref ?? ""} className={cardClassName}>
                    <CardContent {...cardContentProps} />
                  </Link>
                ) : hasAnchorLink ? (
                  <a href={item.href} className={cardClassName}>
                    <CardContent {...cardContentProps} />
                  </a>
                ) : canExpand ? (
                  <button
                    type="button"
                    onClick={() => setExpandedTitle(isExpanded ? null : item.title)}
                    aria-expanded={isExpanded}
                    className={cardClassName}
                  >
                    <CardContent {...cardContentProps} />
                  </button>
                ) : (
                  <div className={cardClassName}>
                    <CardContent {...cardContentProps} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

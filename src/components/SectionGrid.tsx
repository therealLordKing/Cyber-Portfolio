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
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-prose text-slate-200">{description}</p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {eyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {sectionTitle}
            </h2>
          </div>
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">
            {badge}
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const isExpanded = expandedTitle === item.title;
            const detailsText = item.details ?? item.description;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() =>
                  setExpandedTitle(isExpanded ? null : item.title)
                }
                aria-expanded={isExpanded}
                className={`flex min-h-[170px] w-full flex-col justify-between rounded-2xl border p-4 text-left text-sm text-slate-200 transition-all duration-300 ${
                  isExpanded
                    ? "border-sky-500 bg-slate-900 shadow-lg shadow-slate-900/60"
                    : "border-slate-800 bg-slate-950 hover:border-slate-600 hover:bg-slate-900"
                }`}
              >
                <div className="space-y-2">
                  <div className="text-base font-semibold text-white">
                    {item.title}
                  </div>
                  <p className="text-sm text-slate-300">{item.description}</p>
                  <p
                    className={`text-xs text-slate-400 transition-all duration-300 ${
                      isExpanded ? "mt-3 max-h-[320px] opacity-100" : "max-h-0 opacity-0"
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
                        className="rounded-full border border-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

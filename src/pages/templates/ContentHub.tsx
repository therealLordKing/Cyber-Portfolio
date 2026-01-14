import TemplateShell from "../../components/TemplateShell";

export default function ContentHub() {
  return (
    <TemplateShell title="Content hub">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Header
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Title, intro, and topic filters.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <div className="space-y-4">
              <div className="h-4 w-44 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-32 rounded-full bg-[color:var(--border)]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={`pill-${index}`}
                  className="h-7 w-20 rounded-full border template-outline"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Editorial
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Article cards with featured media.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`post-${index}`}
                className="frosted-card template-card flex h-32 flex-col justify-end rounded-2xl border template-outline p-4"
              >
                <div className="h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Newsletter
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Email field and subscribe action.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]">
            <div className="h-10 rounded-xl border border-[color:var(--border)]" />
            <div className="h-10 rounded-full border border-[color:var(--border)]" />
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

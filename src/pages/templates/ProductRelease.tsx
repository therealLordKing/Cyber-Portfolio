import TemplateShell from "../../components/TemplateShell";

export default function ProductRelease() {
  return (
    <TemplateShell title="Product release">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            <span>Hero</span>
            <span>Launch</span>
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Value statement with launch prompt.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <div className="h-4 w-44 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-36 rounded-full bg-[color:var(--border)]" />
              <div className="h-10 w-36 rounded-full border border-[color:var(--border)]" />
            </div>
            <div className="h-36 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Features
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Benefits grouped into quick cards.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`feature-${index}`}
                className="frosted-card template-card rounded-2xl border template-outline p-4"
              >
                <div className="h-3 w-24 rounded-full bg-[color:var(--border-strong)]" />
                <div className="mt-4 h-2 w-20 rounded-full bg-[color:var(--border)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Pricing
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Tiered plans with action buttons.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`price-${index}`}
                className="frosted-card template-card rounded-2xl border template-outline p-4"
              >
                <div className="h-3 w-20 rounded-full bg-[color:var(--border-strong)]" />
                <div className="mt-4 h-6 w-24 rounded-full bg-[color:var(--border)]" />
                <div className="mt-6 h-10 rounded-full border border-[color:var(--border)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Timeline
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Release milestones and key dates.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`timeline-${index}`}
                className="rounded-2xl border template-outline bg-[color:var(--surface-3)] p-4"
              >
                <div className="h-2 w-16 rounded-full bg-[color:var(--border-strong)]" />
                <div className="mt-3 h-2 w-24 rounded-full bg-[color:var(--border)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

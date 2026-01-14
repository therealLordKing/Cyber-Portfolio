import TemplateShell from "../../components/TemplateShell";

export default function PortfolioGrid() {
  return (
    <TemplateShell title="Portfolio grid">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Intro
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Quick overview and visual identity cues.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <div className="h-4 w-44 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-32 rounded-full bg-[color:var(--border)]" />
            </div>
            <div className="h-28 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Grid
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Gallery tiles with project thumbnails.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`tile-${index}`}
                className="frosted-card template-card flex h-32 flex-col justify-end rounded-2xl border template-outline p-4"
              >
                <div className="h-2 w-20 rounded-full bg-[color:var(--border-strong)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Feature
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Spotlight story for a flagship project.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="h-40 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
            <div className="space-y-4">
              <div className="h-3 w-36 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-2 w-28 rounded-full bg-[color:var(--border)]" />
              <div className="h-10 w-32 rounded-full border border-[color:var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

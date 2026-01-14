import TemplateShell from "../../components/TemplateShell";

export default function StartupSaaS() {
  return (
    <TemplateShell title="Startup SaaS">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            <span>Hero</span>
            <span>Demo</span>
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Product promise and demo entry.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <div className="h-4 w-48 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-36 rounded-full bg-[color:var(--border)]" />
              <div className="h-10 w-36 rounded-full border border-[color:var(--border)]" />
            </div>
            <div className="h-40 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Value props
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Core benefits and outcomes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`value-${index}`}
                className="frosted-card template-card rounded-2xl border template-outline p-4"
              >
                <div className="h-3 w-24 rounded-full bg-[color:var(--border-strong)]" />
                <div className="mt-4 h-2 w-28 rounded-full bg-[color:var(--border)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8 lg:col-span-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Workflow
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Steps that show how the product works.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`workflow-${index}`}
                className="rounded-2xl border template-outline bg-[color:var(--surface-3)] p-4"
              >
                  <div className="h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="mt-3 h-2 w-32 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Pricing
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Plan selection and sign-up CTA.
            </p>
            <div className="mt-6 space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`tier-${index}`}
                className="rounded-2xl border template-outline bg-[color:var(--surface-3)] p-4"
              >
                  <div className="h-2 w-20 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="mt-3 h-6 w-24 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
              <div className="h-10 rounded-full border border-[color:var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

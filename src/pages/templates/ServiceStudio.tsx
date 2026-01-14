import TemplateShell from "../../components/TemplateShell";

export default function ServiceStudio() {
  return (
    <TemplateShell title="Service studio">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            <span>Hero</span>
            <span>Availability</span>
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Clear offer with schedule or status.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <div className="space-y-4">
              <div className="h-4 w-40 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-28 rounded-full bg-[color:var(--border)]" />
              <div className="h-10 w-32 rounded-full border border-[color:var(--border)]" />
            </div>
            <div className="h-36 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Services
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Service list with quick price cues.
            </p>
            <div className="mt-6 space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`service-row-${index}`}
                  className="flex items-center justify-between rounded-2xl border template-outline bg-[color:var(--surface-2)] px-4 py-3"
                >
                  <div className="h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="h-2 w-10 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Process
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Step-by-step workflow at a glance.
            </p>
            <div className="mt-6 space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`step-${index}`}
                  className="rounded-2xl border template-outline bg-[color:var(--surface-2)] p-4"
                >
                  <div className="h-2 w-20 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="mt-3 h-2 w-28 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8 lg:col-span-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Testimonials
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Client quotes and credibility blurbs.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={`testimonial-${index}`}
                  className="rounded-2xl border template-outline bg-[color:var(--surface-2)] p-4"
                >
                  <div className="h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="mt-3 h-2 w-32 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Contact
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Intake fields and a send button.
            </p>
            <div className="mt-6 space-y-4">
              <div className="h-10 rounded-xl border border-[color:var(--border)]" />
              <div className="h-10 rounded-xl border border-[color:var(--border)]" />
              <div className="h-10 rounded-full border border-[color:var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

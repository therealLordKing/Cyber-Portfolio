import TemplateShell from "../../components/TemplateShell";

export default function EventLanding() {
  return (
    <TemplateShell title="Event landing">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            <span>Hero</span>
            <span>Tickets</span>
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Event promise with ticket CTA.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <div className="h-4 w-44 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-36 rounded-full bg-[color:var(--border)]" />
              <div className="h-10 w-32 rounded-full border border-[color:var(--border)]" />
            </div>
            <div className="h-36 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Agenda
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Timeline blocks for key sessions.
          </p>
          <div className="mt-6 space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`agenda-${index}`}
                className="flex items-center justify-between rounded-2xl border template-outline bg-[color:var(--surface-3)] px-4 py-3"
              >
                <div className="h-2 w-32 rounded-full bg-[color:var(--border-strong)]" />
                <div className="h-2 w-12 rounded-full bg-[color:var(--border)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Speakers
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Featured guest lineup and roles.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`speaker-${index}`}
                className="frosted-card template-card rounded-2xl border template-outline p-4"
              >
                  <div className="h-12 w-12 rounded-full border border-[color:var(--border)]" />
                  <div className="mt-4 h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Venue
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Location, map, and logistics.
            </p>
            <div className="mt-6 space-y-4">
              <div className="h-28 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
              <div className="h-10 rounded-full border border-[color:var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

import TemplateShell from "../../components/TemplateShell";

export default function OnlineStorefront() {
  return (
    <TemplateShell title="Online storefront">
      <div className="grid gap-6">
        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            <span>Hero</span>
            <span>Promo</span>
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Offer spotlight with featured collection.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <div className="h-4 w-44 rounded-full bg-[color:var(--border-strong)]" />
              <div className="h-3 w-32 rounded-full bg-[color:var(--border)]" />
              <div className="h-10 w-32 rounded-full border border-[color:var(--border)]" />
            </div>
            <div className="h-40 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Collections
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Category tiles for browsing lines.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`collection-${index}`}
                className="frosted-card template-card rounded-2xl border template-outline p-4"
              >
                <div className="h-24 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
                <div className="mt-4 h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Best sellers
          </div>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Product grid with quick add controls.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`product-${index}`}
                className="frosted-card template-card flex flex-col gap-3 rounded-2xl border template-outline p-4"
              >
                <div className="h-20 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
                <div className="h-2 w-24 rounded-full bg-[color:var(--border-strong)]" />
                <div className="h-8 rounded-full border border-[color:var(--border)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Story
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Brand narrative and product values.
            </p>
            <div className="mt-6 h-32 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)]" />
          </div>
          <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Reviews
            </div>
            <p className="mt-2 text-base text-[color:var(--text-soft)]">
              Ratings and short testimonials.
            </p>
            <div className="mt-6 space-y-4">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={`review-${index}`}
                className="rounded-2xl border template-outline bg-[color:var(--surface-3)] p-4"
              >
                  <div className="h-2 w-20 rounded-full bg-[color:var(--border-strong)]" />
                  <div className="mt-3 h-2 w-28 rounded-full bg-[color:var(--border)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TemplateShell>
  );
}

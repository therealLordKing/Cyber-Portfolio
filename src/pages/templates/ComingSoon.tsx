import TemplateShell from "../../components/TemplateShell";

export default function ComingSoon() {
  return (
    <TemplateShell title="Coming soon">
      <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            Placeholder
          </p>
          <p className="mt-2 text-base text-[color:var(--text-soft)]">
            Space reserved for upcoming templates.
          </p>
          <div className="mx-auto h-4 w-48 rounded-full bg-[color:var(--border-strong)]" />
          <div className="mx-auto mt-4 h-3 w-32 rounded-full bg-[color:var(--border)]" />
          <div className="mx-auto mt-8 h-12 w-44 rounded-full border border-[color:var(--border)]" />
        </div>
      </div>
    </TemplateShell>
  );
}

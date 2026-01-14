import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTemplateStyle } from "../context/TemplateStyleContext";

type TemplateShellProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function TemplateShell({
  title,
  eyebrow = "Template Preview",
  children,
}: TemplateShellProps) {
  const { style, setStyle } = useTemplateStyle();
  const options = [
    { id: "glass", label: "Glass" },
    { id: "solid", label: "Solid" },
    { id: "outline", label: "Outline" },
  ] as const;

  return (
    <section className={`template-preview template-preview--${style} space-y-8`}>
      <div>
        <Link
          to="/website-designs"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-strong)]"
        >
          &lt; Back
        </Link>
      </div>
      <div className="frosted-panel template-panel rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-orbitron text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-plex-mono text-[10px] uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Style
            </span>
            <div className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-1)] p-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setStyle(option.id)}
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] transition ${
                    style === option.id
                      ? "bg-[color:var(--accent-soft)] text-[color:var(--text-strong)]"
                      : "text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const templateOptions = [
  { value: "one-page-brand-site", label: "One-page brand site" },
  { value: "portfolio-grid", label: "Portfolio grid" },
  { value: "service-studio", label: "Service studio" },
  { value: "product-release", label: "Product release" },
  { value: "content-hub", label: "Content hub" },
  { value: "startup-saas", label: "Startup SaaS" },
  { value: "ecommerce-storefront", label: "Ecommerce storefront" },
  { value: "event-landing", label: "Event landing" },
  { value: "custom-site-request", label: "Custom site request" },
];

const styleOptions = [
  { value: "glass", label: "Glass" },
  { value: "solid", label: "Solid" },
  { value: "outline", label: "Outline" },
] as const;

export default function DesignHub() {
  const [searchParams] = useSearchParams();
  const initialServiceNeed = searchParams.get("service") ?? "";
  const [hasWebsite, setHasWebsite] = useState<"yes" | "no">("no");
  const [serviceNeed, setServiceNeed] = useState<string>(initialServiceNeed);
  const [siteType, setSiteType] = useState<string>(
    initialServiceNeed === "custom-web-page-design" ? "custom-site-request" : ""
  );
  const [styleChoice, setStyleChoice] = useState<
    (typeof styleOptions)[number]["value"]
  >("glass");
  const isCustomPage = serviceNeed === "custom-web-page-design";
  const showMessageField =
    isCustomPage || serviceNeed === "something-else" || serviceNeed === "not-sure";
  const messagePrompt = isCustomPage
    ? "Tell me your ideas and let's bring them to life!"
    : "Tell me a bit more";

  const urlInputClass = hasWebsite === "yes"
    ? "w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] placeholder:text-[color:var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
    : "w-full cursor-not-allowed rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-sm text-[color:var(--text-muted)] opacity-60";

  return (
    <section className="space-y-10">
      <div className="frosted-panel rounded-[32px] p-6 text-center sm:p-8 sm:text-left">
        <p className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          Website designs
        </p>
        <h1 className="mt-3 font-orbitron text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
          Design hub
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[color:var(--text-soft)]">
          Share the details for your website design, and I'll follow up with the
          next steps.
        </p>
      </div>

      <section className="frosted-panel rounded-[32px] p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-orbitron text-2xl font-semibold text-[color:var(--text-strong)]">
              Design form
            </h2>
          </div>
          <form
            className="grid gap-5"
            name="design-hub"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thanks"
          >
            <input type="hidden" name="form-name" value="design-hub" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
              <span>What type of website do you need?</span>
              <select
                name="website-type"
                className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                value={siteType}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setSiteType(nextValue);
                  if (nextValue === "custom-site-request") {
                    setServiceNeed("custom-web-page-design");
                  }
                }}
              >
                <option value="" disabled>
                  Select one
                </option>
                {templateOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {siteType === "custom-site-request" ? (
                <span className="block text-xs text-[color:var(--text-muted)]">
                  Pick this for a fully custom layout or a fresh concept.
                </span>
              ) : null}
            </label>

            <fieldset className="space-y-3">
              <legend className="text-sm text-[color:var(--text-soft)]">
                What style?
              </legend>
              <div className="flex flex-wrap gap-4">
                {styleOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                      styleChoice === option.value
                        ? "border-[color:var(--accent)] text-[color:var(--text-strong)]"
                        : "border-[color:var(--border)] text-[color:var(--text-muted)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="style"
                      value={option.value}
                      checked={styleChoice === option.value}
                      onChange={() =>
                        setStyleChoice(option.value)
                      }
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
              <span>What is your name?</span>
              <input
                type="text"
                name="name"
                className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] placeholder:text-[color:var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                placeholder="Your name"
              />
            </label>

            <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
              <span>What is your email?</span>
              <input
                type="email"
                name="email"
                className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] placeholder:text-[color:var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                placeholder="you@email.com"
              />
            </label>

            <fieldset className="space-y-3">
              <legend className="text-sm text-[color:var(--text-soft)]">
                Do you currently have a website?
              </legend>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                      hasWebsite === option.value
                        ? "border-[color:var(--accent)] text-[color:var(--text-strong)]"
                        : "border-[color:var(--border)] text-[color:var(--text-muted)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="has-website"
                      value={option.value}
                      checked={hasWebsite === option.value}
                      onChange={() =>
                        setHasWebsite(option.value as "yes" | "no")
                      }
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
              <span>What is the url of your website</span>
              <input
                type="url"
                name="website"
                className={urlInputClass}
                placeholder="https://example.com"
                disabled={hasWebsite === "no"}
              />
            </label>

            <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
              <span>What do you need?</span>
              <select
                name="service"
                className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                value={serviceNeed}
                onChange={(event) => setServiceNeed(event.target.value)}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="website-design">Website design</option>
                <option value="custom-web-page-design">
                  Custom web page design
                </option>
                <option value="website-security-testing">
                  Website security testing
                </option>
                <option value="custom-tool">
                  Assistance with a custom tool/script
                </option>
                <option value="something-else">Something else</option>
                <option value="not-sure">
                  Not sure? (Don't worry, explain the best you can)
                </option>
              </select>
            </label>
            {showMessageField ? (
              <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
                <span>{messagePrompt}</span>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] placeholder:text-[color:var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                  placeholder="Share any goals, ideas, or constraints."
                />
              </label>
            ) : null}
            <button
              type="submit"
              className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--text-strong)] transition hover:bg-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] sm:w-fit"
            >
              Send request
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

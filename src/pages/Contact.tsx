import { useState } from "react";
import SectionGrid from "../components/SectionGrid";

export default function Contact() {
  const [hasWebsite, setHasWebsite] = useState<"yes" | "no">("no");
  const [serviceNeed, setServiceNeed] = useState<string>("");

  const urlInputClass = hasWebsite === "yes"
    ? "w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-[color:var(--text-strong)] placeholder:text-[color:var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
    : "w-full cursor-not-allowed rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-sm text-[color:var(--text-muted)] opacity-60";

  const showMessageField =
    serviceNeed === "something-else" || serviceNeed === "not-sure";

  return (
    <>
      <SectionGrid
        title="Contact"
        description="Reach out for collaborations, security reviews, or website projects."
        eyebrow="Contact"
        sectionTitle="Ways to connect"
        badge="My socials will be up soon, for now fill out your details below and I will return your enquiry."
        showFocusCard={false}
        itemVariant="compact"
        items={[
          {
            title: "YouTube",
            description: "",
            icon: (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M10 15l5-3-5-3v6Z"
                  fill="currentColor"
                />
                <path
                  d="M21.2 8.6a2.8 2.8 0 0 0-2-2C17.5 6 12 6 12 6s-5.5 0-7.2.6a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12a29 29 0 0 0 .3 3.4 2.8 2.8 0 0 0 2 2c1.7.6 7.2.6 7.2.6s5.5 0 7.2-.6a2.8 2.8 0 0 0 2-2A29 29 0 0 0 21.5 12a29 29 0 0 0-.3-3.4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            ),
          },
          {
            title: "GitHub",
            description: "",
            icon: (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.2-2.2-.2-4.5-1.1-4.5-5a3.8 3.8 0 0 1 1-2.6 3.5 3.5 0 0 1 .1-2.6s.8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.5 3.5 0 0 1 .1 2.6 3.8 3.8 0 0 1 1 2.6c0 3.9-2.3 4.8-4.5 5 .3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
                  fill="currentColor"
                />
              </svg>
            ),
          },
          {
            title: "X",
            description: "",
            icon: (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M5 4h4.3l4.1 5.7L18 4h2l-5.8 8.1L20 20h-4.3l-4.5-6.3L6.5 20h-2l6.3-8.7L5 4Z"
                  fill="currentColor"
                />
              </svg>
            ),
          },
          {
            title: "Instagram",
            description: "",
            icon: (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="12" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
            ),
          },
          {
            title: "Email",
            description: "",
            href: "mailto:often136@pjcyber.com",
            icon: (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16v-8A1.5 1.5 0 0 1 4 6.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m3.5 7.5 8.5 5.5 8.5-5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            ),
          },
        ]}
      />
      <section className="frosted-panel mt-12 rounded-[32px] p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-orbitron text-2xl font-semibold text-[color:var(--text-strong)]">
              Tell me about your project
            </h2>
          </div>
          <form
            className="grid gap-5"
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thanks"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
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
                <span>Tell me a bit more</span>
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
    </>
  );
}

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [hasWebsite, setHasWebsite] = useState<"yes" | "no">("no");
  const [serviceNeed, setServiceNeed] = useState<string>(
    searchParams.get("service") ?? ""
  );
  const [emailCopied, setEmailCopied] = useState(false);
  const emailAddress = "often136@pjcyber.com";
  const isCustomPage = serviceNeed === "custom-web-page-design";

  const showMessageField =
    isCustomPage || serviceNeed === "something-else" || serviceNeed === "not-sure";
  const messagePrompt = isCustomPage
    ? "Tell me your ideas and let's bring them to life!"
    : "Tell me a bit more";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.prompt("Copy email:", emailAddress);
    }
  };

  return (
    <section className="space-y-10">
      <header className="space-y-4 text-left">
        <h1 className="font-orbitron text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
          Contact
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)]">
          Reach out for collaborations, security reviews, or website projects.
          My socials will be up soon — for now fill out your details below and
          I will return your enquiry.
        </p>
      </header>

      {/* Socials */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[
          {
            label: "YouTube",
            icon: (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M10 15l5-3-5-3v6Z" fill="currentColor" />
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
            label: "GitHub",
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
            label: "X",
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
            label: "Instagram",
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
            label: "Email",
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
        ].map((social) => (
          <div
            key={social.label}
            className="frosted-card flex flex-col items-center gap-2 rounded-xl p-4 text-[color:var(--text-muted)]"
          >
            {social.icon}
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              {social.label}
            </span>
          </div>
        ))}
      </div>

      {/* Email shortcut */}
      <div className="frosted-card flex flex-col items-start gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm text-[color:var(--text-soft)] break-all">
          {emailAddress}
        </span>
        <div className="flex gap-2">
          <a
            href={`mailto:${emailAddress}`}
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold text-[color:var(--text-strong)] transition hover:bg-[color:var(--accent-strong)]"
          >
            Email me
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            {emailCopied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="frosted-card rounded-2xl p-6 sm:p-8">
        <h2 className="font-orbitron text-xl font-semibold text-[color:var(--text-strong)] sm:text-2xl">
          Tell me about your project
        </h2>

        <form
          className="mt-6 grid gap-5"
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
              className="form-input"
              placeholder="Your name"
            />
          </label>

          <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
            <span>What is your email?</span>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="you@email.com"
            />
          </label>

          <fieldset className="space-y-3">
            <legend className="text-sm text-[color:var(--text-soft)]">
              Do you currently have a website?
            </legend>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    hasWebsite === option.value
                      ? "border-[color:var(--accent)] text-[color:var(--text-strong)]"
                      : "border-[color:var(--border)] text-[color:var(--text-muted)] hover:border-[color:var(--border-strong)]"
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
            <span>What is the URL of your website?</span>
            <input
              type="url"
              name="website"
              className="form-input"
              placeholder="https://example.com"
              disabled={hasWebsite === "no"}
            />
          </label>

          <label className="space-y-2 text-sm text-[color:var(--text-soft)]">
            <span>What do you need?</span>
            <select
              name="service"
              className="form-select"
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
                className="form-textarea"
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
  );
}

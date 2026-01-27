import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-left">
        <div className="space-y-4">
          <h1 className="font-orbitron text-4xl font-semibold tracking-tight text-green-400 sm:text-5xl">
            {"{ Hello World! }"}
          </h1>
          <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            My name is often136, and I am a cyber-security freelance creator who
            helps people understand digital systems by designing, explaining and
            breaking them. I document this process, and provide high level write
            ups and informative content on YouTube.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            I publish a new case study once a month — discussing current and
            upcoming shifts and trends in the industry. I turn these into
            entertaining but informative videos as I want to provide a way for
            all levels of technical expertise to enjoy the work I do.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            I create and maintain custom security tools and scripts which are all
            available on my GitHub. I also design websites and offer admin and
            hosting solutions for small companies.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            This is the way I express myself, I am incredibly passionate about
            what I do and I spend a lot of time on the work I produce. I hope
            you enjoy it as much as I do :)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-[color:var(--accent)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text-strong)] transition hover:bg-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[color:var(--border)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
          >
            Start a project
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[color:var(--border)] px-6 py-2.5 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
          >
            Custom solutions
          </Link>
        </div>
      </section>
    </div>
  );
}

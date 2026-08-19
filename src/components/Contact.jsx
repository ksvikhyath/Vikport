import { profile } from "../data/content";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/shiva-vikhyath-reddy-kakanuru", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-3 font-mono text-sm text-teal">$ cat contact.txt</div>
        <h2 className="max-w-xl font-mono text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mt-4 max-w-lg text-text-muted">
          Open to internships and full-time roles in AI and backend engineering. Reach out directly, or find me on GitHub / LinkedIn.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 rounded-lg border border-line bg-surface-raised px-5 py-4 transition-colors hover:border-amber sm:w-64"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                  {l.label}
                </div>
                <div className="mt-1 font-mono text-sm text-text">{l.value}</div>
              </div>
              <span className="text-text-faint transition-colors group-hover:text-amber">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

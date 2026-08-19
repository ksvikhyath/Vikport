import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-text">
          vikhyath<span className="text-amber">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 font-mono text-sm text-text-muted sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-amber">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          download
          className="rounded border border-line px-3 py-1.5 font-mono text-xs text-text transition-colors hover:border-amber hover:text-amber"
        >
          resume ↓
        </a>
      </nav>
    </header>
  );
}

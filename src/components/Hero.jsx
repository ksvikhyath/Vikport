import { profile } from "../data/content";
import NodeGraph from "./NodeGraph";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 py-28 sm:py-36">
        <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-teal">
          computer science engineering · pes university
        </div>

        <h1 className="fade-up mt-6 max-w-3xl font-mono text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-6xl" style={{ animationDelay: "0.08s" }}>
          Hi, I'm {profile.name.split(" ")[0]}
          <span className="text-amber text-glow">.</span>
        </h1>

        <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-text-muted" style={{ animationDelay: "0.16s" }}>
          {profile.tagline}
        </p>

        <div className="fade-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.24s" }}>
          <a
            href="#projects"
            className="rounded bg-amber px-5 py-2.5 font-mono text-sm font-semibold text-[#fff8ec] transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal"
          >
            GitHub ↗
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="rounded border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-amber hover:text-amber"
          >
            Resume ↓
          </a>
        </div>

        <NodeGraph className="mt-16 h-auto w-full max-w-2xl opacity-80 sm:mt-20" />
      </div>
    </section>
  );
}

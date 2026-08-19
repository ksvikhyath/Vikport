import { techStack } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading command="cat skills.json" title="Tech Stack" />
        <div className="grid gap-8 sm:grid-cols-2">
          {techStack.map((group) => (
            <div key={group.label}>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-surface-raised px-3 py-1.5 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

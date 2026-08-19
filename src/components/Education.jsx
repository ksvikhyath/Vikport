import { education, awards, publications } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading command="cat education.log" title="Education & Recognition" />

      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
            Education
          </div>
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.school} className="border-l-2 border-line pl-4">
                <div className="font-mono text-sm font-semibold text-text">{e.school}</div>
                <div className="mt-1 text-sm text-text-muted">{e.detail}</div>
                <div className="mt-1 font-mono text-xs text-text-faint">
                  {e.period} · {e.meta}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
              Publications
            </div>
            <ul className="space-y-3">
              {publications.map((p, i) => (
                <li key={i} className="text-sm leading-relaxed text-text-muted">
                  {p.citation}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
              Awards
            </div>
            <ul className="space-y-2">
              {awards.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm text-text-muted">
                  <span className="text-amber">·</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { about } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading command="cat about.txt" title="About" />
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

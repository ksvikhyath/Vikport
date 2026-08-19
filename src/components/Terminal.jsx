import { terminalLines } from "../data/content";

export default function Terminal() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div
          className="overflow-hidden rounded-lg shadow-2xl shadow-black/30"
          style={{ backgroundColor: "var(--color-term-bg)", border: "1px solid var(--color-term-line)" }}
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ borderBottom: "1px solid var(--color-term-line)" }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span
              className="ml-3 font-mono text-xs"
              style={{ color: "var(--color-term-text-muted)" }}
            >
              vikhyath@dev: ~
            </span>
          </div>
          <div className="space-y-1.5 p-6 font-mono text-sm leading-relaxed sm:text-[15px]">
            {terminalLines.map((line, i) =>
              line.prompt ? (
                <div key={i} className="pt-3 first:pt-0">
                  <span style={{ color: "var(--color-term-teal)" }}>vikhyath@dev</span>
                  <span style={{ color: "var(--color-term-text-muted)" }}>:~$ </span>
                  <span style={{ color: "var(--color-term-text)" }}>{line.prompt}</span>
                </div>
              ) : (
                <div key={i} style={{ color: "var(--color-term-text-muted)" }}>
                  {line.output}
                </div>
              )
            )}
            <div className="pt-3">
              <span style={{ color: "var(--color-term-teal)" }}>vikhyath@dev</span>
              <span style={{ color: "var(--color-term-text-muted)" }}>:~$ </span>
              <span
                className="cursor-blink inline-block h-[1em] w-[0.55em] translate-y-[2px] align-middle"
                style={{ backgroundColor: "var(--color-term-amber)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

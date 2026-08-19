// Section headers styled as shell commands — each one literally describes
// what the section does (cat prints a file, ls lists a directory), so the
// device carries real information instead of decorating the page.

export default function SectionHeading({ command, title }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-teal">$</span>
      <div>
        <div className="font-mono text-sm text-text-muted">{command}</div>
        <h2 className="mt-1 font-mono text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

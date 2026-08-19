export default function ProjectCard({ project }) {
  const hasLinks = project.github || project.caseStudy;

  return (
    <article className="group flex flex-col rounded-lg border border-line bg-surface-raised p-6 transition-colors hover:border-amber-dim">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-lg font-semibold text-text">
            <span aria-hidden="true">{project.icon}</span>
            {project.name}
          </div>
          <div className="mt-1 font-mono text-xs text-text-faint">{project.tag}</div>
        </div>
        {project.stat && (
          <div className="shrink-0 text-right">
            <div className="font-mono text-xl font-bold text-amber">{project.stat.value}</div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-text-faint">
              {project.stat.label}
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-text-muted">
              <span className="mt-1 text-teal">·</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-line-soft bg-ink px-2 py-1 font-mono text-[11px] text-text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {hasLinks && (
        <div className="mt-5 flex gap-4 border-t border-line-soft pt-4 font-mono text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-amber"
            >
              GitHub ↗
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-amber"
            >
              Case Study ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function Block({ title, items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PortfolioProjectDetailCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
          {project.period && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {project.period}
            </span>
          )}
        </div>

        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-6">
        <Block title="프로젝트 목적" items={project.purpose} />
        <Block title="개발 내용" items={project.development} />
        <Block title="성과" items={project.result} />
      </div>
    </article>
  );
}
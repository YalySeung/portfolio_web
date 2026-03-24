import { Link } from "react-router-dom";

function Block({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-base leading-8 text-slate-600">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PortfolioTimelineItem({ project, isLatest = false }) {
  return (
    <article className="grid grid-cols-[110px_24px_minmax(0,1fr)] gap-4 md:grid-cols-[180px_32px_minmax(0,1fr)]">
      <div className="pt-1 text-right">
        <div
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
            isLatest ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          {project.period || "기간 미정"}
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute top-0 bottom-0 w-px bg-slate-300" />
        <div
          className={`relative z-10 mt-1 h-4 w-4 rounded-full border-4 ${
            isLatest ? "border-slate-900 bg-white" : "border-slate-400 bg-white"
          }`}
        />
      </div>

      <div className="pb-10">
        <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                {project.title}
              </h3>

              {isLatest && (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Recent
                </span>
              )}
            </div>

            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs md:text-sm text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <Block title="프로젝트 목적" items={project.purpose} />
            <Block title="개발 내용" items={project.development} />
            <Block title="성과" items={project.result} />
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to={`/projects/${encodeURIComponent(project.id)}`}
              className="group inline-flex cursor-pointer items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
            >
              상세 보기
              <span className="ml-2 transition duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

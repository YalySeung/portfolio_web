import FadeInUp from "../common/FadeInUp";
import PortfolioTimelineItem from "./PortfolioTimelineItem";

export default function PortfolioTimelineSection({ meta, projects }) {
  return (
    <section id="portfolio-md" className="mx-auto max-w-7xl space-y-10 px-6 py-16">
        <FadeInUp>
                  <div className="space-y-3">
        <p className="text-sm font-medium text-slate-500">Markdown Portfolio</p>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            프로젝트 이력 타임라인
          </h2>
          <p className="max-w-3xl text-base md:text-lg leading-8 text-slate-600 md:text-base">
            md 파일로 관리 중인 프로젝트 이력을 시간순 타임라인으로 정리했습니다.
          </p>
        </div>
      </div>
        </FadeInUp>


      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500">
            {meta?.date ? `최종 정리일: ${meta.date}` : "최종 정리일 정보 없음"}
          </div>

          <div className="flex flex-wrap gap-2">
            {(meta?.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
            <FadeInUp>
          <PortfolioTimelineItem
            key={project.id}
            project={project}
            isLatest={index < 2}
          />
            </FadeInUp>
        ))}
      </div>
    </section>
  );
}
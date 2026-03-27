import FadeInUp from "../common/FadeInUp";
import PortfolioTimelineItem from "./PortfolioTimelineItem";

export default function PortfolioTimelineSection({ projects }) {
  return (
    <section
      id="portfolio-timeline"
      className="mx-auto max-w-7xl space-y-10 px-6 py-16"
    >
      <FadeInUp>
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-500">
            Markdown Portfolio
          </p>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              프로젝트 이력 타임라인
            </h2>
          </div>
        </div>
      </FadeInUp>

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

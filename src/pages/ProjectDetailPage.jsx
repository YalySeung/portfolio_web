import FadeInUp from "../components/common/FadeInUp";
import { Link, useParams } from "react-router-dom";
import portfolioMarkdown from "../assets/Career.md?raw";
import {
  parsePortfolioMarkdown,
  normalizeProjectId,
} from "../data/parsePortfolioMarkdown";

function DetailBlock({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${index}-${item}`}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-base md:text-lg leading-8 text-slate-600 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectHero({ project }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <Link
          to="/"
          className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          ← 홈으로
        </Link>

        <div className="mt-8 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Project Detail
            </span>

            {project.period && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {project.period}
              </span>
            )}
          </div>

          <div className="space-y-3">
            <h1 className="text-text-4xl md:text-5xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {project.title}
            </h1>

            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {project.summary ||
                "프로젝트 요약 정보가 아직 정리되지 않았습니다."}
            </p>
          </div>

          {project.techStack?.length > 0 && (
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
      </div>
    </section>
  );
}

function SummaryPanel({ project }) {
  const purposeCount = project.purpose?.length ?? 0;
  const developmentCount = project.development?.length ?? 0;
  const resultCount = project.result?.length ?? 0;

  return (
    <aside className="space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">요약</h2>

        <div className="mt-5 space-y-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
              기간
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">
              {project.period || "-"}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
              기술 수
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">
              {project.techStack?.length ?? 0}개
            </div>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
              항목 수
            </div>
            <div className="mt-1 space-y-1 text-sm text-slate-700">
              <div>프로젝트 목적 {purposeCount}건</div>
              <div>개발 내용 {developmentCount}건</div>
              <div>성과 {resultCount}건</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
        <h2 className="text-lg font-bold">포인트</h2>
        <p className="mt-3 text-base md:text-lg leading-8 text-slate-300">
          이 페이지는 md 파일을 파싱한 데이터를 기반으로 렌더링됩니다. 즉,
          내용을 수정하면 UI도 함께 반영됩니다.
        </p>
      </div>
    </aside>
  );
}

function EmptyState() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link
          to="/"
          className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          ← 홈으로
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold">프로젝트를 찾을 수 없습니다.</h1>
          <p className="mt-4 text-slate-600">
            잘못된 주소이거나 markdown 데이터에 해당 프로젝트가 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();

  const { projects } = parsePortfolioMarkdown(portfolioMarkdown);

  const routeId = normalizeProjectId(decodeURIComponent(id ?? ""));

  const project = projects.find(
    (item) => normalizeProjectId(item.id) === routeId,
  );

  if (!project) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ProjectHero project={project} />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-8">
          <FadeInUp delay={0.05}>
            <DetailBlock title="프로젝트 목적" items={project.purpose} />
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <DetailBlock title="개발 내용" items={project.development} />
          </FadeInUp>

          <FadeInUp delay={0.19}>
            <DetailBlock title="성과" items={project.result} />
          </FadeInUp>
        </div>

        <SummaryPanel project={project} />
      </main>
    </div>
  );
}

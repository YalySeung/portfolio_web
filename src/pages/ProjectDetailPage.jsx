import { Link, useParams } from "react-router-dom";
import FadeInUp from "../components/common/FadeInUp";
import projectsMarkdown from "../assets/projects_pub.md?raw";
import {
  parseProjectsMarkdown,
  normalizeProjectId,
} from "../data/parseProjectsMarkdown";
import { useNavigate } from "react-router-dom";
import { transformProjects } from "../data/transformProjects";

function Badge({ children, dark = false }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        dark
          ? "bg-slate-900 text-white"
          : "border border-slate-300 bg-white text-slate-700",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function SectionCard({ title, items = [], tone = "default" }) {
  if (!items || items.length === 0) return null;

  const cardTone =
    tone === "soft"
      ? "bg-slate-50 border-slate-200"
      : "bg-white border-slate-200";

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <Badge>{items.length}건</Badge>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${index}-${item}`}
            className={`rounded-3xl border p-5 shadow-sm ${cardTone}`}
          >
            <div className="flex gap-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="text-base leading-8 text-slate-700 md:text-lg">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSolvingCard({ item, index }) {
  const blocks = [
    { label: "문제", items: item.problem },
    { label: "해결", items: item.solution },
    { label: "성과", items: item.result },
    { label: "느낀점", items: item.learned },
  ].filter((block) => block.items && block.items.length > 0);

  if (blocks.length === 0) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
          {index + 1}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Problem Solving</p>
          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {block.label}
            </h4>

            <ul className="mt-3 space-y-2">
              {block.items.map((content, idx) => (
                <li
                  key={`${block.label}-${idx}-${content}`}
                  className="text-sm leading-7 text-slate-700 md:text-base"
                >
                  - {content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSolvingSection({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          문제 해결 과정
        </h2>
        <Badge>{items.length}건</Badge>
      </div>

      <div className="space-y-5">
        {items.map((item, index) => (
          <ProblemSolvingCard
            key={`${item.title}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectHero({ project }) {
  const navigate = useNavigate();
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          ← 홈으로
        </button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge dark>Project Detail</Badge>
              {project.period && <Badge>{project.period}</Badge>}
              {project.role && <Badge>{project.role}</Badge>}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {project.title}
              </h1>

              <p className="max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
                {project.summary ||
                  "프로젝트 요약 정보가 아직 정리되지 않았습니다."}
              </p>
            </div>

            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">핵심 요약</p>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  기간
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {project.period || "-"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  역할
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {project.role || "-"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  기술 수
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {project.techStack?.length ?? 0}개
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryPanel({ project }) {
  const overviewCount = project.overview?.length ?? 0;
  const responsibilitiesCount = project.responsibilities?.length ?? 0;
  const problemSolvingCount = project.problemSolving?.length ?? 0;

  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">요약</h2>

        <div className="mt-5 space-y-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
              프로젝트 개요
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">
              {overviewCount}건
            </div>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
              주요 역할
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">
              {responsibilitiesCount}건
            </div>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
              문제 해결 과정
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">
              {problemSolvingCount}건
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
        <h2 className="text-lg font-bold">포인트</h2>
        <p className="mt-3 text-base leading-8 text-slate-300">
          이 페이지는 md 파일을 파싱한 데이터를 기반으로 렌더링됩니다. 내용을
          갱신하면 UI도 함께 반영됩니다.
        </p>
      </div>
    </aside>
  );
}

function EmptyState() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-4xl space-y-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          ← 홈으로
        </button>

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

  const { projects } = parseProjectsMarkdown(projectsMarkdown);
  const viewProjects = transformProjects(projects);

  const routeId = normalizeProjectId(decodeURIComponent(id ?? ""));

  const project = viewProjects.find(
    (item) => normalizeProjectId(item.id) === routeId,
  );

  if (!project) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ProjectHero project={project} />

      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-10">
          <FadeInUp delay={0.05}>
            <SectionCard title="프로젝트 개요" items={project.overview} />
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <SectionCard
              title="주요 역할"
              items={project.responsibilities}
              tone="soft"
            />
          </FadeInUp>

          <FadeInUp delay={0.19}>
            <ProblemSolvingSection items={project.problemSolving} />
          </FadeInUp>
        </div>

        <SummaryPanel project={project} />
      </main>
    </div>
  );
}

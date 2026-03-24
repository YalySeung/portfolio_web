import { SecondaryButton } from "../common/Buttons";
import { portfolioLinks } from "../../data/portfolioData";

export default function CtaSection() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">다음 단계</h3>
              <p className="leading-7 text-slate-300">
                현재 포트폴리오를 시작점으로 두고, 이후 Spring Boot API 연동,
                관리자형 프로젝트 데이터 구조, 상세 프로젝트 페이지까지 확장할 수 있습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={portfolioLinks.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                GitHub
              </a>

              <a href={portfolioLinks.blog} target="_blank" rel="noreferrer">
                <SecondaryButton dark>Blog</SecondaryButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
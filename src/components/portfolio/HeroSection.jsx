import ContentCard from "../common/ContentCard";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";
import { portfolioLinks } from "../../data/portfolioData";

function scrollToProjects() {
  const section = document.getElementById("projects");
  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function HeroSection() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
            Backend Portfolio
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              여러 도메인을 연결해
              <br />
              더 나은 시스템을 만드는
              <br />
              백엔드 개발자
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Spring Boot 기반 API 설계, 데이터 모델링, 운영 안정성, 파일 처리,
              인증 구조, React 연동까지 실무형 시스템을 구축해온 경험을 정리한
              포트폴리오 사이트입니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div onClick={scrollToProjects}>
              <PrimaryButton>프로젝트 보기</PrimaryButton>
            </div>

            <a href={portfolioLinks.email}>
              <SecondaryButton>연락하기</SecondaryButton>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div>Spring Boot</div>
            <div>JPA / Querydsl</div>
            <div>React / Tailwind</div>
          </div>
        </div>

        <ContentCard className="p-8">
          <h3 className="text-xl font-bold">사이트 구성 제안</h3>
          <div className="mt-6 space-y-4 text-base md:text-lg leading-8 text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">1. 소개</p>
              <p>한 줄 슬로건, 핵심 기술, 이력서 / GitHub / 연락 링크</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">2. 프로젝트</p>
              <p>프로젝트 카드, 담당 역할, 기술스택, 문제 해결 포인트</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">3. 기술 스택</p>
              <p>백엔드 / 프론트 / 인프라를 구분하여 실무 역량 강조</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">4. 확장 포인트</p>
              <p>Spring Boot API와 연결해 관리형 포트폴리오로 확장 가능</p>
            </div>
          </div>
        </ContentCard>
      </div>
    </section>
  );
}
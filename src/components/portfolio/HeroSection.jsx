import ContentCard from "../common/ContentCard";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";
import { contactLinks } from "../../data/contact";

function scrollToProjects() {
  const section = document.getElementById("portfolio-timeline");
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
            Backend Developer
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              정리와 구조화를 통해
              <br />
              더 나은 협업을 만드는
              <br />
              백엔드 개발자
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              옵시디언을 활용해 기술과 프로젝트 경험을 체계적으로 정리하고, 이를
              기반으로 복잡한 시스템 흐름을 구조화하여 공유합니다. 정리된 구조를
              바탕으로 개발자와 현업 모두가 이해할 수 있는 형태로 소통하며, 협업
              효율을 높이는 개발을 지향합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div onClick={scrollToProjects}>
              <PrimaryButton>프로젝트 보기</PrimaryButton>
            </div>

            <a href={contactLinks.email}>
              <SecondaryButton>연락하기</SecondaryButton>
            </a>
          </div>
        </div>

        <ContentCard className="p-8">
          <div className="mt-6 space-y-4 text-base md:text-lg leading-8 text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">👤 소개</p>
              <p>
                복잡한 시스템과 요구사항을 정리하고 구조화하여, 개발자와 현업 간
                원활한 소통을 만드는 백엔드 개발자입니다.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">💡 강점</p>
              <p>- 비동기 처리 기반 성능 개선 경험</p>
              <p>- JPA 마이그레이션을 통한 구조 개선</p>
              <p>- 다수 시스템 연동 API 설계 경험</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">🛠 문제해결</p>
              <p>- OCR 결과 집계 성능 병목 해결</p>
              <p>- 다중 DB 대응 구조 개선 (MyBatis → JPA)</p>
              <p>- RPA 운영 자동화 및 배포 구조 개선</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">🚀 방향성</p>
              <p>- 확장 가능한 구조 설계</p>
              <p>- 운영 안정성 개선</p>
              <p>- 자동화 및 효율화 중심 개발</p>
            </div>
          </div>
        </ContentCard>
      </div>
    </section>
  );
}

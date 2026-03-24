import SectionContainer from "../common/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <SectionContainer className="space-y-8" id="experience">
      <SectionTitle
        eyebrow="Experience"
        title="도메인 경험"
        description="금융, MES, 전자문서, 이미지 시스템, RPA 등 다양한 업무 도메인에서 아키텍처와 운영성을 함께 다뤄온 경험을 정리했습니다."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((item) => (
          <ExperienceCard key={item.title} item={item} />
        ))}
      </div>
    </SectionContainer>
  );
}
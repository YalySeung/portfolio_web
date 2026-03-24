import SectionContainer from "../common/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import SkillGroupCard from "./SkillGroupCard";
import { skills } from "../../data/portfolioData";

export default function SkillsSection() {
  const skillEntries = Object.entries(skills ?? {});

  return (
    <SectionContainer className="space-y-8" id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="기술 스택"
        description="채용 담당자와 실무 리더가 한 번에 확인할 수 있도록 레이어별로 정리했습니다."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillEntries.map(([group, values]) => (
          <SkillGroupCard key={group} group={group} values={values ?? []} />
        ))}
      </div>
    </SectionContainer>
  );
}
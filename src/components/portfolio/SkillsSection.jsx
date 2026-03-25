import SectionContainer from "../common/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import SkillGroupCard from "./SkillGroupCard";

export default function SkillsSection({ categories}) {
  return (
    <SectionContainer className="space-y-8" id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="기술 스택"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <SkillGroupCard name={category.name} items={category.items ?? []} />
        ))}
      </div>
    </SectionContainer>
  );
}

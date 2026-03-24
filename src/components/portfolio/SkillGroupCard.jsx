import ContentCard from "../common/ContentCard";
import { Pill } from "../common/Pill";

export default function SkillGroupCard({ group, values = [] }) {
  return (
    <ContentCard>
      <h3 className="text-lg font-semibold">{group}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {values.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </ContentCard>
  );
}
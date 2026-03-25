import ContentCard from "../common/ContentCard";
import { Pill } from "../common/Pill";

export default function SkillGroupCard({ name, items = [] }) {
  return (
    <ContentCard>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </ContentCard>
  );
}
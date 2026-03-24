import ContentCard from "../common/ContentCard";
import { OutlinePill } from "../common/Pill";

export default function ExperienceCard({ item }) {
  return (
    <ContentCard>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-slate-500">{item.company}</p>
        </div>
        <OutlinePill>{item.period}</OutlinePill>
      </div>
      <p className="mt-4 text-base md:text-lg leading-8 text-slate-600">{item.desc}</p>
    </ContentCard>
  );
}
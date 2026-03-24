export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-slate-500">{eyebrow}</p>
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
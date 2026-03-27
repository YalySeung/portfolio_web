import SectionContainer from "../common/SectionContainer";
import SectionTitle from "../common/SectionTitle";

function InfoCard({ title, children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function BulletList({ items = [] }) {
  if (!items.length) {
    return <p className="text-sm text-slate-400">내용 없음</p>;
  }

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="text-base leading-8 text-slate-600"
        >
          - {item}
        </li>
      ))}
    </ul>
  );
}

function CompanyList({ companies = [] }) {
  if (!companies.length) {
    return <p className="text-sm text-slate-400">회사 경력 정보 없음</p>;
  }

  return (
    <div className="space-y-4">
      {companies.map((company, index) => (
        <div
          key={`${company.name}-${index}`}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h4 className="text-lg font-semibold text-slate-900">
              {company.name}
            </h4>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200">
              {company.period || "기간 미정"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProfileSection({ profile }) {
  const {
    about = [],
    companies = [],
    education = [],
    certifications = [],
    military = [],
  } = profile ?? {};

  return (
    <SectionContainer id="profile" className="space-y-10">
      <SectionTitle
        eyebrow="Profile"
        title="프로필"
        description="회사 경력, 학력 및 자격 정보를 정리했습니다."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <InfoCard title="About">
          <BulletList items={about} />
        </InfoCard>

        <InfoCard title="회사 경력">
          <CompanyList companies={companies} />
        </InfoCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <InfoCard title="학력 / 자격 / 병역">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                학력
              </h4>
              <div className="mt-3">
                <BulletList items={education} />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                자격증
              </h4>
              <div className="mt-3">
                <BulletList items={certifications} />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                병역
              </h4>
              <div className="mt-3">
                <BulletList items={military} />
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </SectionContainer>
  );
}
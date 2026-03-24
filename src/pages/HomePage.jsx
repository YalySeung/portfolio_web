import { useMemo } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/portfolio/HeroSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import CtaSection from "../components/portfolio/CtaSection";
import PortfolioTimelineSection from "../components/portfolio/PortfolioTimelineSection";
import { parsePortfolioMarkdown } from "../data/parsePortfolioMarkdown";
import portfolioMarkdown from "../assets/Career.md?raw";

export default function HomePage() {
  const portfolioData = useMemo(() => {
    return parsePortfolioMarkdown(portfolioMarkdown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <PortfolioTimelineSection
        meta={portfolioData.meta}
        projects={portfolioData.projects}
      />
      <SkillsSection />
      <CtaSection />
    </div>
  );
}
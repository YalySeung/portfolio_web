import { useMemo } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/portfolio/HeroSection";
import ProfileSection from "../components/portfolio/ProfileSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import CtaSection from "../components/portfolio/CtaSection";
import PortfolioTimelineSection from "../components/portfolio/PortfolioTimelineSection";
import { parseSkillsMarkdown } from "../data/parseSkillsMarkdown";
import { parseProfileMarkdown } from "../data/parseProfileMarkdown";
import { parseProjectsMarkdown } from "../data/parseProjectsMarkdown";
import { transformProjects } from "../data/transformProjects";
import domainMarkDown from "../assets/domain_pub.md?raw";
import profileMarkDown from "../assets/profile_pub.md?raw";
import projectMarkDown from "../assets/projects_pub.md?raw";

export default function HomePage() {
  const domainData = useMemo(() => {
    return parseSkillsMarkdown(domainMarkDown);
  }, []);

  const profileData = useMemo(() => {
    return parseProfileMarkdown(profileMarkDown);
  }, []);

  const projectData = useMemo(() => {
    const { projects } = parseProjectsMarkdown(projectMarkDown);
    const viewProjects = transformProjects(projects);
    return viewProjects;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <HeroSection />
      <ProfileSection profile={profileData} />
      <SkillsSection categories={domainData.categories} />
      <PortfolioTimelineSection
        projects={projectData}
      />
      <CtaSection />
    </div>
  );
}

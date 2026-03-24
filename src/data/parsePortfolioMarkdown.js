function cleanLine(line) {
  return line.replace(/\r/g, "").trim();
}

export function normalizeProjectId(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseTitleAndPeriod(line) {
  const matched = line.match(/^##\s+(.*?)(\((.*?)\))?$/);

  if (!matched) {
    return {
      title: line.replace(/^##\s+/, "").trim(),
      period: "",
    };
  }

  return {
    title: matched[1]?.trim() ?? "",
    period: matched[3]?.trim() ?? "",
  };
}

function parseMeta(markdown) {
  const lines = markdown.split("\n").map(cleanLine);

  const dateLine = lines.find((line) => line.startsWith("# 날짜"));
  const tagLine = lines.find((line) => line.startsWith("# 태그"));

  return {
    date: dateLine ? dateLine.replace("# 날짜 :", "").trim() : "",
    tags: tagLine
      ? tagLine
          .replace("# 태그 :", "")
          .trim()
          .split(/\s+/)
          .filter(Boolean)
      : [],
  };
}

export function parsePortfolioMarkdown(markdown) {
  const lines = markdown.split("\n").map(cleanLine);

  const meta = parseMeta(markdown);

  const contentStartIndex = lines.findIndex((line) => line === "# 내용");
  const contentLines =
    contentStartIndex >= 0 ? lines.slice(contentStartIndex + 1) : lines;

  const projects = [];
  let currentProject = null;
  let currentSection = "";

  for (const line of contentLines) {
    if (!line || line === "---") {
      continue;
    }

    if (line.startsWith("## ")) {
      if (currentProject) {
        projects.push(currentProject);
      }

      const { title, period } = parseTitleAndPeriod(line);

      currentProject = {
        id: normalizeProjectId(title),
        title,
        period,
        techStack: [],
        purpose: [],
        development: [],
        result: [],
      };

      currentSection = "";
      continue;
    }

    if (!currentProject) {
      continue;
    }

    if (line.startsWith("### ")) {
      const sectionTitle = line.replace(/^###\s+/, "").trim();

      if (sectionTitle.includes("기술스택") || sectionTitle.includes("기술 스택")) {
        currentSection = "techStack";
      } else if (sectionTitle.includes("프로젝트 목적") || sectionTitle.includes("프로젝트목적")) {
        currentSection = "purpose";
      } else if (sectionTitle.includes("개발내용") || sectionTitle.includes("개발 내용")) {
        currentSection = "development";
      } else if (sectionTitle.includes("성과")) {
        currentSection = "result";
      } else {
        currentSection = "";
      }

      continue;
    }

    if (line.startsWith("- ")) {
      const value = line.replace(/^- /, "").trim();

      if (currentSection && currentProject[currentSection]) {
        currentProject[currentSection].push(value);
      }
    }
  }

  if (currentProject) {
    projects.push(currentProject);
  }

  return {
    meta,
    projects,
  };
}
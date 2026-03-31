function cleanLine(line) {
  return line.replace(/\r/g, "").trim();
}

function convertHighlightSyntax(text = "") {
  return text.replace(/==(.+?)==/g, "<mark>$1</mark>");
}

function cleanContentValue(line) {
  return convertHighlightSyntax(line.replace(/^- /, "").trim());
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

function parseMeta(lines) {
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

function parseProjectTitle(line) {
  return line.replace(/^##\s+/, "").trim();
}

function parseInlineMeta(line) {
  const value = line.replace(/^- /, "").trim();

  if (value.startsWith("기간 :")) {
    return { key: "period", value: value.replace("기간 :", "").trim() };
  }
  if (value.startsWith("역할 :")) {
    return { key: "role", value: value.replace("역할 :", "").trim() };
  }
  if (value.startsWith("기술 :")) {
    const techs = value
      .replace("기술 :", "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    return { key: "techStack", value: techs };
  }

  return null;
}

export function parseProjectsMarkdown(markdown) {
  const lines = markdown.split("\n").map(cleanLine);
  const meta = parseMeta(lines);

  const contentStartIndex = lines.findIndex((line) => line === "# 내용");
  const contentLines =
    contentStartIndex >= 0 ? lines.slice(contentStartIndex + 1) : lines;

  const projects = [];
  let currentProject = null;
  let currentSection = "";
  let currentProblemSolving = null;
  let currentProblemSubSection = "";

  const finalizeCurrentProblem = () => {
    if (currentProject && currentProblemSolving) {
      currentProject.problemSolving.push(currentProblemSolving);
      currentProblemSolving = null;
      currentProblemSubSection = "";
    }
  };

  const finalizeCurrentProject = () => {
    finalizeCurrentProblem();

    if (currentProject) {
      if (!currentProject.summary && currentProject.overview.length > 0) {
        currentProject.summary = currentProject.overview[0];
      }
      projects.push(currentProject);
      currentProject = null;
    }
  };

  for (const line of contentLines) {
    if (!line || line === "# 경력 사항" || line === "# 연결문서") {
      continue;
    }

    if (/^-{10,}$/.test(line)) {
      finalizeCurrentProblem();
      continue;
    }

    if (line.startsWith("## ")) {
      finalizeCurrentProject();

      const title = parseProjectTitle(line);

      currentProject = {
        id: normalizeProjectId(title),
        title,
        period: "",
        role: "",
        techStack: [],
        summary: "",
        overview: [],
        responsibilities: [],
        problemSolving: [],
        diagrams: [],
      };

      currentSection = "";
      continue;
    }

    if (!currentProject) {
      continue;
    }

    if (line.startsWith("- ")) {
      const inlineMeta = parseInlineMeta(line);

      if (inlineMeta) {
        currentProject[inlineMeta.key] = inlineMeta.value;
        continue;
      }

      const value = cleanContentValue(line);

      if (currentSection === "프로젝트 개요") {
        currentProject.overview.push(value);
      } else if (currentSection === "주요 역할") {
        currentProject.responsibilities.push(value);
      } else if (currentProblemSolving && currentProblemSubSection) {
        currentProblemSolving[currentProblemSubSection].push(value);
      }

      continue;
    }

    if (line.startsWith("### ")) {
      finalizeCurrentProblem();

      const sectionTitle = line.replace(/^###\s+/, "").trim();
      currentSection = sectionTitle;

      if (sectionTitle.startsWith("문제 해결 과정")) {
        currentProblemSolving = {
          title: sectionTitle,
          problem: [],
          solution: [],
          result: [],
          learned: [],
        };
        currentProblemSubSection = "";
      }

      continue;
    }

    if (line.startsWith("#### ")) {
      const subTitle = line.replace(/^####\s+/, "").trim();

      if (!currentProblemSolving) {
        continue;
      }

      if (subTitle === "문제") {
        currentProblemSubSection = "problem";
      } else if (subTitle === "해결") {
        currentProblemSubSection = "solution";
      } else if (subTitle === "성과") {
        currentProblemSubSection = "result";
      } else if (subTitle === "느낀점") {
        currentProblemSubSection = "learned";
      } else {
        currentProblemSubSection = "";
      }

      continue;
    }

    if (line.startsWith("![[") && currentSection === "구성도") {
      currentProject.diagrams.push(line);
    }
  }

  finalizeCurrentProject();

  return {
    meta,
    projects,
  };
}
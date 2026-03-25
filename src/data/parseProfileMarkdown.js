function cleanLine(line) {
  return line.replace(/\r/g, "").trim();
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

export function parseProfileMarkdown(markdown) {
  const lines = markdown.split("\n").map(cleanLine);
  const meta = parseMeta(lines);

  const contentStartIndex = lines.findIndex((line) => line === "# 내용");
  const contentLines =
    contentStartIndex >= 0 ? lines.slice(contentStartIndex + 1) : lines;

  const profile = {
    meta,
    military: [],
    education: [],
    certifications: [],
    companies: [],
    about: []
  };

  let currentSection = "";
  let currentCompany = null;

  for (const line of contentLines) {
    if (!line || line === "---" || line === "# 연결문서") {
      continue;
    }

    if (line.startsWith("## ")) {
      currentSection = line.replace(/^##\s+/, "").trim();
      currentCompany = null;
      continue;
    }

    if (line.startsWith("### ")) {
      const subTitle = line.replace(/^###\s+/, "").trim();

      if (currentSection === "회사 경력") {
        currentCompany = {
          name: subTitle,
          period: "",
        };
        profile.companies.push(currentCompany);
        continue;
      }

      continue;
    }

    if (!line.startsWith("- ") && !line.startsWith("• ")) {
      continue;
    }

    const value = line.replace(/^[-•]\s*/, "").trim();

    switch (currentSection) {
      case "병역":
        profile.military.push(value);
        break;

      case "학력":
        profile.education.push(value);
        break;

      case "자격증":
        profile.certifications.push(value);
        break;

      case "회사 경력":
        if (value.startsWith("재직기간 :")) {
          if (currentCompany) {
            currentCompany.period = value.replace("재직기간 :", "").trim();
          }
        }
        break;

      case "About":
        profile.about.push(value);
        break;

      default:
        break;
    }
  }

  return profile;
}
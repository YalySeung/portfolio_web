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

export function parseSkillsMarkdown(markdown) {
  const lines = markdown.split("\n").map(cleanLine);
  const meta = parseMeta(lines);

  const contentStartIndex = lines.findIndex((line) => line === "# 내용");
  const contentLines =
    contentStartIndex >= 0 ? lines.slice(contentStartIndex + 1) : lines;

  const categories = [];
  let currentCategory = null;

  for (const line of contentLines) {
    if (!line || line === "---" || line === "# 연결문서") {
      continue;
    }

    if (line.startsWith("## ")) {
      if (currentCategory) {
        categories.push(currentCategory);
      }

      currentCategory = {
        name: line.replace(/^##\s+/, "").trim(),
        items: [],
      };
      continue;
    }

    if (line.startsWith("- ") && currentCategory) {
      currentCategory.items.push(line.replace(/^- /, "").trim());
    }
  }

  if (currentCategory) {
    categories.push(currentCategory);
  }

  return {
    meta,
    categories,
    categoryMap: categories.reduce((acc, category) => {
      acc[category.name] = category.items;
      return acc;
    }, {}),
  };
}
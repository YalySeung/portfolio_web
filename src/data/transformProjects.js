import { PROJECT_ALIAS_MAP } from "./projectAliasMap";

function maskTitle(title = "") {
  let result = title;

  Object.entries(PROJECT_ALIAS_MAP).forEach(([key, value]) => {
    if (result.includes(key)) {
      result = result.replace(key, value);
    }
  });

  return result;
}

export function transformProjects(projects = []) {
  return projects.map((project) => ({
    ...project,
    title: maskTitle(project.title),
  }));
}
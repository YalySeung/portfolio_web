import parse from "html-react-parser";

export function renderHtml(content = "") {
  return parse(content);
}
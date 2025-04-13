// utils/extractHeadings.ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import { Root, Content, Heading, Text } from "mdast";

export interface HeadingInfo {
  depth: number;
  text: string;
  slug: string;
}

export function extractHeadings(markdownText: string): HeadingInfo[] {
  const tree = unified().use(remarkParse).parse(markdownText) as Root;
  const headings: HeadingInfo[] = [];

  function walk(node: Content) {
    if (node.type === "heading") {
      const headingNode = node as Heading;
      const text = headingNode.children
        .filter((child) => child.type === "text")
        .map((child) => (child as Text).value)
        .join("");

      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      headings.push({ depth: headingNode.depth, text, slug });
    }

    if ("children" in node && Array.isArray(node.children)) {
      node.children.forEach((child) => walk(child as Content));
    }
  }

  tree.children.forEach((node) => walk(node as Content));
  return headings;
}

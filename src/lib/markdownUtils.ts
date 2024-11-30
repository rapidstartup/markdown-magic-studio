import { marked } from 'marked';

export const convertMarkdownToHtml = (markdown: string): string => {
  return marked(markdown);
};

export const templates = {
  header: "# Welcome to My Document\n\n",
  section: "\n## New Section\n\nWrite your content here...\n\n",
  list: "\n- Item 1\n- Item 2\n- Item 3\n\n",
  table: "\n| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |\n\n",
};
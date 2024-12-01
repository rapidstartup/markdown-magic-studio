import { marked } from 'marked';

export const convertMarkdownToHtml = (markdown: string): string => {
  return marked.parse(markdown);
};

interface SectionTemplate {
  name: string;
  markdown: string;
  description: string;
}

interface SectionType {
  name: string;
  sections: SectionTemplate[];
}

export const sectionTypes: SectionType[] = [
  {
    name: "Document",
    sections: [
      {
        name: "Title Page",
        description: "Large centered title with subtitle",
        markdown: `<div class="min-h-screen flex items-center justify-center text-center">
  # Your Document Title
  ## Your Subtitle Here
</div>`
      },
      {
        name: "Page Header",
        description: "Title, subtitle and image header",
        markdown: `<div class="mb-12">
  # Page Title
  ## Subtitle goes here
  ![Header Image](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format)
</div>`
      },
      {
        name: "Paragraph Block",
        description: "Text content block",
        markdown: `<div class="prose max-w-none mb-8">
  Write your content here. This block is optimized for long-form content with proper typography and spacing.
</div>`
      }
    ]
  },
  {
    name: "Page",
    sections: [
      {
        name: "Menu Bar",
        description: "Navigation menu",
        markdown: `<nav class="flex justify-between items-center py-4 mb-8">
  - [Home](#)
  - [About](#)
  - [Contact](#)
</nav>`
      },
      {
        name: "Hero Section",
        description: "Full-width hero with title and CTA",
        markdown: `<div class="bg-accent py-24 px-8 text-center mb-12">
  # Welcome to Our Site
  ## Create something amazing
  [Get Started](#){.bg-primary .text-white .px-6 .py-2 .rounded-lg .inline-block .mt-4}
</div>`
      },
      {
        name: "Headline",
        description: "Large title text",
        markdown: `# Your Headline Here`
      },
      {
        name: "Subheadline",
        description: "Secondary title text",
        markdown: `## Your Subheadline Here`
      },
      {
        name: "Image",
        description: "Full-width image with caption",
        markdown: `![Image Description](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format)
*Image Caption*`
      },
      {
        name: "Ordered List",
        description: "Numbered list",
        markdown: `1. First item
2. Second item
3. Third item`
      },
      {
        name: "Unordered List",
        description: "Bullet point list",
        markdown: `- First point
- Second point
- Third point`
      }
    ]
  }
];

export const templates = {
  header: "# Welcome to My Document\n\n",
  section: "\n## New Section\n\nWrite your content here...\n\n",
  list: "\n- Item 1\n- Item 2\n- Item 3\n\n",
  table: "\n| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |\n\n",
};
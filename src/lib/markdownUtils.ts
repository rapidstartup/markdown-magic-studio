import { marked } from 'marked';

export const convertMarkdownToHtml = (markdown: string): string => {
  return marked(markdown);
};

export const templates = {
  titlePage: `
<div class="title-page">
  # Your Document Title
  ## Subtitle goes here
</div>`,
  pageHeader: `
<div class="page-header">
  # Page Title
  ## Subtitle
  ![Header Image](placeholder.svg)
</div>`,
  paragraph: `
This is a paragraph block. Replace this text with your content.
`,
  menuBar: `
<nav class="nav-section">
  - [Home](#)
  - [About](#)
  - [Contact](#)
</nav>`,
  heroSection: `
<div class="hero-section">
  # Welcome
  ## Start your journey here
  [Get Started](#)
</div>`,
  headline: `
# Main Headline
`,
  subheadline: `
## Sub Headline
`,
  image: `
![Image Description](placeholder.svg)
*Image caption goes here*
`,
  orderedList: `
1. First item
2. Second item
3. Third item
`,
  unorderedList: `
- First point
- Second point
- Third point
`
};

export const sectionTypes = [
  {
    name: "Document",
    sections: [
      { name: "Title Page", description: "Centered title and subtitle", markdown: templates.titlePage },
      { name: "Page Header", description: "Title, subtitle and image", markdown: templates.pageHeader },
      { name: "Paragraph", description: "Text block", markdown: templates.paragraph },
    ]
  },
  {
    name: "Page",
    sections: [
      { name: "Menu Bar", description: "Navigation menu", markdown: templates.menuBar },
      { name: "Hero Section", description: "Full-width hero with CTA", markdown: templates.heroSection },
      { name: "Headline", description: "Large title text", markdown: templates.headline },
      { name: "Subheadline", description: "Secondary title text", markdown: templates.subheadline },
      { name: "Image", description: "Full-width image with caption", markdown: templates.image },
      { name: "Ordered List", description: "Numbered list", markdown: templates.orderedList },
      { name: "Unordered List", description: "Bullet point list", markdown: templates.unorderedList },
    ]
  }
];
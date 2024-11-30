import { useState } from "react";
import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { Toolbar } from "@/components/Toolbar";
import { convertMarkdownToHtml } from "@/lib/markdownUtils";
import { templates } from "@/lib/markdownUtils";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [markdown, setMarkdown] = useState("# Welcome to the Markdown Editor\n\nStart typing to see the preview...");

  const handleExport = (type: 'pdf' | 'html') => {
    toast({
      title: "Coming soon!",
      description: `Export to ${type.toUpperCase()} will be available in the next update.`,
    });
  };

  const handleInsertTemplate = (templateName: string) => {
    const template = templates[templateName as keyof typeof templates];
    if (template) {
      setMarkdown(prev => prev + template);
    }
  };

  return (
    <div className="container py-8">
      <Toolbar onExport={handleExport} onInsertTemplate={handleInsertTemplate} />
      
      <div className="split-pane">
        <div className="editor-pane">
          <Editor value={markdown} onChange={setMarkdown} />
        </div>
        
        <div className="preview-pane">
          <Preview html={convertMarkdownToHtml(markdown)} />
        </div>
      </div>
    </div>
  );
};

export default Index;
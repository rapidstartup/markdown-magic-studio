import { useState } from "react";
import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { Toolbar } from "@/components/Toolbar";
import { convertMarkdownToHtml } from "@/lib/markdownUtils";
import { templates } from "@/lib/markdownUtils";
import { toast } from "@/components/ui/use-toast";
import html2pdf from 'html2pdf.js';

const Index = () => {
  const [markdown, setMarkdown] = useState("# Welcome to the Markdown Editor\n\nStart typing to see the preview...");

  const handleExport = async (type: 'pdf' | 'html') => {
    const htmlContent = convertMarkdownToHtml(markdown);
    
    if (type === 'html') {
      // Create a Blob with the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'document.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Success!",
        description: "HTML file has been downloaded.",
      });
    } else if (type === 'pdf') {
      // Create a temporary div to properly render the content
      const element = document.createElement('div');
      element.innerHTML = htmlContent;
      element.className = 'markdown-body';
      document.body.appendChild(element);
      
      try {
        const opt = {
          margin: 1,
          filename: 'document.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        await html2pdf().set(opt).from(element).save();
        toast({
          title: "Success!",
          description: "PDF file has been downloaded.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to generate PDF. Please try again.",
          variant: "destructive",
        });
      } finally {
        document.body.removeChild(element);
      }
    }
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
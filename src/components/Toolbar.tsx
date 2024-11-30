import { Button } from "@/components/ui/button";
import { Download, FileText, Save, Settings } from "lucide-react";

interface ToolbarProps {
  onExport: (type: 'pdf' | 'html') => void;
  onInsertTemplate: (template: string) => void;
}

export const Toolbar = ({ onExport, onInsertTemplate }: ToolbarProps) => {
  return (
    <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onInsertTemplate('header')}
        >
          <FileText className="w-4 h-4 mr-2" />
          Header
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onInsertTemplate('section')}
        >
          <FileText className="w-4 h-4 mr-2" />
          Section
        </Button>
      </div>
      
      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onExport('html')}
        >
          <Save className="w-4 h-4 mr-2" />
          Export HTML
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onExport('pdf')}
        >
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
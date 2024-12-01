import { Button } from "@/components/ui/button";
import { Download, FileText, Save, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sectionTypes } from "@/lib/markdownUtils";

interface ToolbarProps {
  onExport: (type: 'pdf' | 'html') => void;
  onInsertTemplate: (template: string) => void;
}

export const Toolbar = ({ onExport, onInsertTemplate }: ToolbarProps) => {
  console.log("Toolbar rendered with section types:", sectionTypes);
  
  const handleSectionClick = (markdown: string) => {
    console.log("Section clicked, inserting markdown:", markdown);
    onInsertTemplate(markdown);
  };

  return (
    <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        {sectionTypes.map((type) => (
          <DropdownMenu key={type.name}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                {type.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dropdown-content w-[300px] bg-white">
              <DropdownMenuLabel>{type.name} Sections</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {type.sections.map((section) => (
                <DropdownMenuItem
                  key={section.name}
                  onClick={() => handleSectionClick(section.markdown)}
                  className="flex flex-col items-start py-2"
                >
                  <span className="font-medium">{section.name}</span>
                  <span className="text-xs text-gray-500">
                    {section.description}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
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
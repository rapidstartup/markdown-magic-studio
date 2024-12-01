import { useEffect, useRef } from 'react';
import { Textarea } from "@/components/ui/textarea";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, onChange }: EditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  const highlightSections = (text: string) => {
    // Add a subtle border and label to sections in the editor
    return text.replace(
      /<div[^>]*class="([^"]*)"[^>]*>/g,
      '<div class="$1" style="border: 1px dashed #e5e7eb; padding: 1rem; margin: 0.5rem 0; position: relative;">'
    );
  };

  return (
    <Textarea
      ref={textareaRef}
      value={highlightSections(value)}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full min-h-[500px] font-mono text-sm resize-none focus-visible:ring-1 focus-visible:ring-secondary"
      placeholder="Start writing your markdown here..."
    />
  );
};
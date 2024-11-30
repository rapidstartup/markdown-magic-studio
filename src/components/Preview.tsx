interface PreviewProps {
  html: string;
}

export const Preview = ({ html }: PreviewProps) => {
  return (
    <div 
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
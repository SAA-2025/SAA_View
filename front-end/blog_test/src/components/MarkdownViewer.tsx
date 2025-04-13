import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "./markdown-theme.css";
import rehypeRaw from "rehype-raw";


interface MarkdownViewerProps {
  markdownText: string
}

const MarkdownViewer = ({ markdownText }: MarkdownViewerProps) => {
  return (
    <div className="markdown-body" id="md-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
        children={markdownText}
      />
    </div>
  );
};


export default MarkdownViewer;

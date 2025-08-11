import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const MarkdownTextSection = ({ text }: { text: string }) => {
  return (
    <section id="text" className="container d-flex flex-column align-items-center justify-content-center py-5">
      <div className="text markdown">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
      </div>
    </section>
  );
};

export default MarkdownTextSection;

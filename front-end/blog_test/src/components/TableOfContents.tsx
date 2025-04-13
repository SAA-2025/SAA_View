import { HeadingInfo } from "../utils/extractHeadings";
import 'bootstrap/dist/css/bootstrap.min.css'

interface Props {
  headings: HeadingInfo[];
}

const TableOfContents = ({ headings }: Props) => {
    
  return (
    <div className="mb-4">
      <h4>📚 Table of Contents</h4>
      <ul className="list-unstyled">
        {headings.map((h, i) => (
          <li key={i} style={{ marginLeft: (h.depth - 1) * 16 }}>
            <a 
                className="text-decoration-none fw-bold"
                href={`#${h.slug}`}>{h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;

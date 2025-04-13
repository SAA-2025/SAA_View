import MarkdownViewer from "./components/MarkdownViewer";
import "bootstrap/dist/css/bootstrap.min.css";
import { extractHeadings } from "./utils/extractHeadings";
import TableOfContents from "./components/TableOfContents";
import pfp from "./assets/images/pfp.png";
import "remixicon/fonts/remixicon.css";
import markdownText from "../../docs/ARCHITECTURE.md?raw";
// import { useEffect, useState } from "react";


function App() {
  // const [markdown, setMarkdown] = useState<string>("Loading...");
  
  // useEffect(() => {
  //   fetch("https://raw.githubusercontent.com/aleko-khomasuridze/RaspiSQL/refs/heads/main/README.md")
  //   .then(res => res.text())
  //   .then(res => {
  //     setMarkdown(res);
  //   })
  //   .catch(err => {
  //     console.error(err)
  //     setMarkdown("Error Loading Blog");
  //   });
  // }) 
  
  // const headings = extractHeadings(markdown);
  const headings = extractHeadings(markdownText);


  return (
    <>
      <div className="container py-lg-5">
        <div className="row d-flex flex-wrap">
          {/* Right column: move to top on small screens */}
          <div className="col-12 col-lg-4 p-4 order-1 order-lg-2">
            <div className="bg-theme rounded p-4 mb-5 text-white pb-5">
              <div className="d-flex align-items-end">
                <img className="mb-3" src={pfp} alt="" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="btn btn-primary mb-3 ms-2 d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
              </div>
              <h3>სახელი გვარი</h3>
              <p>თანამდეობა</p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia id delectus distinctio.
              </p>
            </div>
            <TableOfContents headings={headings} />
          </div>

          {/* Left column: main markdown content */}
          <div className="col-12 col-lg-8 p-4 order-2 order-lg-1">
            <MarkdownViewer markdownText={markdownText} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

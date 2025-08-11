import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Title from "../others/Title";

interface MediaSectionProps {
  images: string[];
}

const MediaSection = ({ images }: MediaSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  const openGallery = (idx: number) => {
    setIndex(idx);
    setIsOpen(true);
  };

  if (images.length < 5) {
    return <p className="text-danger text-center">Please provide at least 5 images.</p>;
  }

  return (
    <section id="media">
      <div className="container section-padding">
        <Title title="მედია - ჩვენზე" />
        <div className="row g-2">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded shadow cursor-pointer"
              src={images[0]}
              alt="Main"
              style={{ width: "100%", height: 'auto', objectFit: "cover", cursor: "pointer" }}
              onClick={() => openGallery(0)}
            />
          </div>

          <div className="col-lg-6">
            <div className="row g-2 h-100">
              {[1, 2, 3, 4].map((i) => (
                <div className="col-6" key={i}>
                  <img
                    className="img-fluid rounded shadow cursor-pointer"
                    src={images[i]}
                    alt={`Thumbnail ${i}`}
                    style={{ objectFit: "cover", height: "auto", width: "100%" }}
                    onClick={() => openGallery(i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={index}
          slides={slides}
          plugins={[Zoom, Thumbnails]}
        />
      )}
    </section>
  );
};

export default MediaSection;

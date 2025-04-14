import Button from "../../buttons/Button";
import CardCarousel from "../../carousels/CardCarousel";



const servicesSectionHeader = {
  title: "სერვისები",
  body: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. ",
};

const services = [
  {
    title: "ბუღალტერია",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "calculator",
    link: "https://saa-2025.github.io/SAA_View/services/accounting",
  },
  {
    title: "აუდიტი",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "file-list",
    link: "https://saa-2025.github.io/SAA_View/services",
  },
  {
    title: "გადასახადები",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "money-dollar-box",
    link: "https://saa-2025.github.io/SAA_View/services",
  },
  {
    title: "პროგრამების დანერგვა",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "shake-hands",
    link: "https://saa-2025.github.io/SAA_View/services",
  },
  {
    title: "იურიდიული",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "auction",
    link: "https://saa-2025.github.io/SAA_View/services",
  },
  {
    title: "არარეზიდენტები",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "building",
    link: "https://saa-2025.github.io/SAA_View/services",
  },
];

const ServicesSection = () => {
  return (
    <section className="container text-center my-5">
      <div className="row">
        <div className="col-lg-6 col-12 text-center">
          <h2 className="display-4 fw-bold">{servicesSectionHeader.title}</h2>
        </div>
        <div className="col-lg-6 col-12 text-lg-start text-center">
          <p>{servicesSectionHeader.body}</p>
        </div>
      </div>
      <CardCarousel cards={services} />
      <div className="col d-flex justify-content-center">
        <Button text="ყველა" href="/services" />
      </div>
    </section>
  );
};

export default ServicesSection;

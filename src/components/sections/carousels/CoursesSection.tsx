import Button from "../../buttons/Button";
import CardCarousel from "../../carousels/CardCarousel";

const courses = [
  {
    title: "უნივერსალური",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "global",
    link: "/SAA_View/courses/",
  },
  {
    title: "მთავარი ბუღალტერი",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "user-2",
    link: "/SAA_View/courses/",
  },
  {
    title: "ACCA",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "calculator",
    link: "/SAA_View/courses/",
  },
  {
    title: "ACCA",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "calculator",
    link: "/SAA_View/courses/",
  },
  {
    title: "ACCA",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: "calculator",
    link: "/SAA_View/courses/",
  },
];

const coursesSectionTitle = {
  title: "ჩვენი კურსები",
  body: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. ",
};

const CoursesSection = () => {
  return (
    <section className="container text-center my-5">
      <div className="row">
        <div className="col-lg-6 col-12 text-center">
          <h2 className="display-4 fw-bold">{coursesSectionTitle.title}</h2>
        </div>
        <div className="col-lg-6 col-12 text-lg-start text-center">
          <p>{coursesSectionTitle.body}</p>
        </div>
      </div>
      <CardCarousel cards={courses} />
      <div className="col d-flex justify-content-center">
        <Button text="ყველა" href="/SAA_View/courses" />
      </div>
    </section>
  );
};

export default CoursesSection;

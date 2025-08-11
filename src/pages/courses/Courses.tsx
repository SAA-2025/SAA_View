import ListHero from "../../components/sections/hero/ListHero";
import InfoCardSection from "../../components/sections/InfoCards/InfoCardSection";
import { courses } from "../../data/courses";

const Courses = () => {
  return (
    <article>
      <ListHero
        header="კურსები"
        body="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. "
        image="/images/courses.png"
      />
      <InfoCardSection infoCards={courses} />
    </article>
  );
};

export default Courses;

import MainHero from "../../components/sections/hero/MainHero";
import NavBar from "../../layout/navbar/NavBar";
import heroImage from "../../assets/images/hero-image.png";
import Footer from "../../layout/footer/Footer";
import BlogSection from "./BlogSection";
import ContactSection from "../../components/sections/ContactSection";
import CoursesSection from "../../components/sections/carousels/CoursesSection";
import TeamSection from "../../components/sections/our_team/TeamSection";
import ServicesSection from "../../components/sections/carousels/ServicesSection";
import ClientRewievs from "../about_us/ClientRewievs";
import Title from "../../components/others/Title";


const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
          <MainHero
            header="მთავარი ტექსტი მოტივაციური"
            body="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. "
            image={heroImage}
          />
          <BlogSection />
          {/* <CoursesSection /> */}
          <ServicesSection/>
          {/* აქ უნდა იყოს კლიენტების კარუსელი */}
          <TeamSection/>
          <div className="container">
            <div className="row">
              <div className="col">

          <Title title="კლიენტები"/>
              </div>
            </div>
          </div>
          <ClientRewievs/>
          <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;

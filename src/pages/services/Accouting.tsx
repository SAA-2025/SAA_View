import NavBar from "../../layout/navbar/NavBar";
import DetailHero from "../../components/sections/hero/DetailHero";
import heroImgae from "../../assets/images/services_accounting.png";
import ContactSection from "../../components/sections/ContactSection";
import image from "../../assets/images/services-aditional.png";
import Footer from "../../layout/footer/Footer";
import ServiceCard from "../../components/cards/ServiceCard";
import UnorderedList from "../../components/lists/UnorderedList";
import ServicesSection from "../../components/sections/carousels/ServicesSection";



const Accouting = () => {
  return (
    <div>
      <NavBar />
      <article>
        <main>
          <DetailHero
            header="ბუღალტერია"
            body="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. "
            image={heroImgae}
          />
          <section>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <h1 className="display-6 fw-bold ">
                    რას <span className="text-danger">გთავაზობთ</span>
                  </h1>
                  <hr />
                  <UnorderedList items={[
                    'პროდუქციის რეალური ხარჯების გაცნობიერება',
                    'ხარჯების ოპტიმიზაციის სფეროების განსაზღვრა',
                    'ხარჯების ოპტიმიზაციის სფეროების განსაზღვრა'
                  ]}/>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <h1 className="display-6 fw-bold ">
                    რამე დამატებითი{" "}
                    <span className="text-danger">ინფორმაციები</span>
                  </h1>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 d-flex align-items-center">
                  <UnorderedList items={[
                    'პროდუქციის რეალური ხარჯების გაცნობიერება',
                    'ხარჯების ოპტიმიზაციის სფეროების განსაზღვრა',
                    'ხარჯების ოპტიმიზაციის სფეროების განსაზღვრა'
                  ]}/>
                </div>
                <ServiceCard
                  image={image}
                  contentLeft={{ header: "130,300₾+", content: "საშუალო შემოსავალი" }}
                  contentRight={{ header: "95%", content: "ბიზნესის განვითარება" }}
                />
              </div>
            </div>
          </section>
          <ContactSection />
          <ServicesSection />
        </main>
      </article>
      <Footer />
    </div>
  );
};

export default Accouting;

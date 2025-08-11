import MainHero from "../../components/sections/hero/MainHero";
import BlogSection from "./BlogSection";
import ContactSection from "../../components/sections/ContactSection";
import TeamSection from "../../components/sections/our_team/TeamSection";
import ServicesSection from "../../components/sections/ServicesSection";
import ClientRewievs from "../about_us/ClientRewievs";
import Title from "../../components/others/Title";
import ClientCard from "../../components/cards/ClientCard";
import clients from "../../data/clients";
import ResponsiveCarousel from "../../components/carousels/ResponsiveCarousel";

const HomePage = () => {
  return (
    <article>
      <MainHero
        header="SAA საბუღალტრო მომსახურეობა"
        body="მომავლის ტექნოლოგიები უკვე აქ არის გაუმჯობესებული გადაწყვეტილებები თქვენი ბიზნესისთვის."
        image="/images/hero-image.png"
      />

      <BlogSection />
      <ServicesSection />

      <section className="">
        <div className="container">
          <Title title="კლიენტები" />
          <ResponsiveCarousel
            displayNavButtons={true}
            settings={{ dots: false }}
            slidesToShow={{ large: 4, medium: 2, small: 1 }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="p-2 d-flex justify-content-center"
              >
                <ClientCard client={client} />
              </div> 
            ))}
          </ResponsiveCarousel>
        </div>
      </section>

      <TeamSection />
      <ClientRewievs />
      <ContactSection />
    </article>
  );
};

export default HomePage;

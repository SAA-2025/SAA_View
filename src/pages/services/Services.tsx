import ListHero from "../../components/sections/hero/ListHero";
import InfoCardSection from "../../components/sections/InfoCards/InfoCardSection";
import  services  from "../../data/services.ts";

const Services = () => {
  const carouselServices = services.map(service => ({
    id: service.id,
    title: service.title,
    body: service.description,
    icon: service.icon
  }));
  

  return (
    <article>
      <ListHero
        header="სერვისები"
        body="ჩვენი სერვისები უზრუნველყოფს ზუსტ აღრიცხვას, ანალიტიკას და მხარდაჭერას თქვენი ბიზნესის ზრდისთვის."
        image='/images/services-hero-image.png'
      />
      <InfoCardSection infoCards={carouselServices} />
    </article>
  );
};

export default Services;

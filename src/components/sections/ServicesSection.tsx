import Button from "../buttons/Button";
import services  from "../../data/services";
import ResponsiveCarousel from "../carousels/ResponsiveCarousel";
import CarouselCard from "../cards/CarouselCard";


const servicesSectionHeader = {
  title: "სერვისები",
  body: "ჩვენ გთავაზობთ სიზუსტეზე, გამჭვირვალობაზე და ინოვაციებზე დაფუძნებულ მომსახურებებს — ბუღალტერიიდან აუდიტამდე და საგადასახადო კონსულტაციამდე, მორგებული თქვენი ბიზნესის საჭიროებებზე.",
};



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
      <div className="container">
        <ResponsiveCarousel
          displayNavButtons={true}
          slidesToShow={{large: 3, medium: 1, small: 1}}
        >
          {services.map((service) => (
            <CarouselCard info={service}/>
          ))}
        </ResponsiveCarousel>
      </div>
      <div className="col d-flex justify-content-center">
        <Button text="ყველა" href="/services" />
      </div>
    </section>
  );
};

export default ServicesSection;

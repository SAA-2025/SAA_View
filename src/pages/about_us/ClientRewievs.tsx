import Title from "../../components/others/Title";
import ResponsiveCarousel from "../../components/carousels/ResponsiveCarousel";

import clients from "../../data/clients";
import ClientReviewCard from "../../components/cards/ClientReviewCard";

const ClientRewievs = () => {
  return (
    <section>
      <div className="container p-5">
        <Title title="რას ამბობენ -  SAA-ზე" />
        <ResponsiveCarousel
          slidesToShow={{ large: 3, medium: 2, small: 1 }}
          settings={{ dots: true }}
          displayNavButtons
        >
          {clients
            .sort(() => 0.5 - Math.random())
            .slice(0, 8) 
            .map((client) => (
              <ClientReviewCard
                key={client.id}
                client={client.author}
                text={client.testimonial}
              />
            ))}
        </ResponsiveCarousel>
      </div>
    </section>
  );
};

export default ClientRewievs;

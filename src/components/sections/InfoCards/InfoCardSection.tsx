import InfoCards from "./InfoCards";

interface InfoCardSectionProps {
  infoCards: {
    title: string;
    body: string;
    icon: string;
    link: string;
  }[];
}

const InfoCardSection = ({infoCards}: InfoCardSectionProps) => {
  return (
    <section className="container section-padding">
      <div className="row justify-content-center">
        <div className="col-lg-8 ">
          <InfoCards infoCards={infoCards} />
        </div>
      </div>
    </section>
  );
};

export default InfoCardSection;

import Button from "../../buttons/Button";

interface IndustryHeroProps {
    image: string;
    title: string;
}

const IndustryHero = ({image, title}: IndustryHeroProps) => {
  return (
    <section id="hero">
        <div
          className="container-fluid section-vh-95 d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "darken",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="row w-100">
            <div className="col d-flex flex-column align-items-center justify-content-center">
              <h1 className="text-center text-white display-1 fw-bolder">
                {title}
              </h1>
              <Button text="გაიგე მეტი" href="#text" className="mt-4" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default IndustryHero
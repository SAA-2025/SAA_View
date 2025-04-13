import Button from "../../buttons/Button";

interface IndustryHeroProps {
    image: string;
    title: string;
}

const IndustryHero = ({image, title}: IndustryHeroProps) => {
  return (
    <section 
        className="min-vh-100 d-flex align-items-center text-center"
        style={{
            background: `linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.3)), url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
    >
      <div className="container">
        <div className="row">
          <div className="col  d-flex flex-column align-items-center">
            <h1 className="display-1 fw-bold text-white industry-title"><strong>{title}</strong></h1>
            <Button text="გაიგე მეტი" href={`#blog`}></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryHero
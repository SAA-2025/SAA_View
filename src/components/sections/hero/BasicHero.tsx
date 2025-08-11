interface BasicHeroProps {
  title: string;
  shortDescription?: string;
  icon: string;
}

const BasicHero = ( {title, shortDescription, icon}: BasicHeroProps ) => {
  return (
    <section className="section-vh-95 bg-accent d-flex align-items-center">
        <div className="container text-white py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 text-center text-lg-start px-5 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bolder mb-3">
                {title}
              </h1>
              <p className="lead">{shortDescription}</p>
              <a
                href="#contact-section"
                className="btn btn-lg btn-light text-accent fw-bold mt-4"
              >
                დაგვიკავშირდი
              </a>
            </div>
            <div className="col-lg-6 col-12 text-center">
              <i
                className={`ri-${icon}-fill`}
                style={{
                  fontSize: "15vw",
                  maxWidth: "480px",
                  maxHeight: "480px",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default BasicHero
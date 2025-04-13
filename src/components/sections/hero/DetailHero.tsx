import '../../../../style.css'

interface DetailHeroProps {
  header: string;
  body: string;
  image: string;
}


const DetailHero = ({header, body, image}: DetailHeroProps) => {
  return (
    <section className="section-padding bg-accent text-center text-lg-start text-white d-flex flex-column">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 d-flex text-start flex-column align-items-start justify-content-center p-4">
            <h1 className="display-3 mb-4 fw-bold">{header}</h1>
            <p>{body}</p>
            <a 
              href='/SAA_View/services/accounting#contact-section' 
              className="btn btn-light fw-bold text-accent"
            >
              დაგვეკონტაქტე
            </a>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center p-4 position-relative">
            <img
              src={image}
              alt="hero"
              className="img-fluid rounded position-relative d-lg-block d-none"
            />
          </div>
        </div>
        {/* <div className="row p-3 shadow text-black rounded position-absolute z-3 bg-white w-75" style={{bottom: 0}}>
          
            <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center border-end">
              <p className='fs-5 fw-bold'>30 საათი</p>
            </div>
            
            <div className="col-lg-3 col-12">
              <p>30 საათი</p>
            </div>
            <div className="col-lg-3 col-12">
              <p>30 საათი</p>
            </div>
            <div className="col-lg-3 col-12">
              <p>30 საათი</p>
            </div>
        
        </div> */}
      </div>
    </section>
  );
}

export default DetailHero
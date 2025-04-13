import "../../../style.css";

interface InfoCardProps {
  infoCard: {
    title: string;
    body: string;
    icon: string;
    link: string;
  };
}

const InfoCard = ({ infoCard }: InfoCardProps) => {
  return (
    <a className="text-decoration-none" href={infoCard.link}>
      <div className="card border-0 shadow-lg mb-5 rounded-4 p-3 p-md-4" style={{ maxWidth: "840px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-3 d-flex justify-content-center justify-content-md-start">
            <div
              className="bg-accent d-flex justify-content-center align-items-center"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "8px",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: '8px'
              }}
            >
              <i className={`ri-${infoCard.icon}-fill display-1 text-white`}></i>
            </div>
          </div>

          <div className="col-md-9 mt-3 mt-md-0">
            <div className="card-body text-center text-md-start ps-md-4 pe-md-2">
              <h5 className="card-title fw-bold fs-3">{infoCard.title}</h5>
              <p className="card-text">{infoCard.body}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default InfoCard;

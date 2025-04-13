interface MarkerPopupCardProps {
  address: string;
  link: string;
  details?: string;
}

const MarkerPopupCard = ({ address, link, details }: MarkerPopupCardProps) => {
  return (
    <div className="row p-2 align-items-center" style={{ width: "200px" }}>
      <div className="col-9 text-wrap">
        <strong>{address}</strong>
        <br />
        <small>{details}</small>
      </div>
      <div className="col-3 d-flex align-items-start justify-content-start">
        <a
          href={link}
          target="_blank"
          className="btn btn-outline-danger bg-outline-accent text-decoration-none text-accent rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: 36,
            height: 36,
          }}
        >
          <i className="ri-corner-up-right-line"></i>
        </a>
      </div>
    </div>
  );
};

export default MarkerPopupCard;

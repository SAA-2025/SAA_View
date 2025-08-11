interface ClientReviewCardProps {
  text: string;
  client: string;
  className?: string;
  isActive?: boolean;
}

const ClientReviewCard = ({
  text,
  client,
  className = "",
  isActive
}: ClientReviewCardProps) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className={`card border-0 p-3 mb-4 ${className} ${isActive ? '' : 'opacity-50' }`}
        style={{ width: "18rem", height: '385px', backgroundColor: "#F5F2ED" }}
      >
        <div className="card-body h-100">
          <i className="ri-double-quotes-l display-1 text-accent"></i>
          <p>
            <strong className="card-text mb-5">{text}</strong>
          </p>
          <p style={{bottom: '0px'}}>
            <small className="text-secondary mb-0">- {client}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;

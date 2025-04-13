interface ClientReviewCardProps {
  text: string;
  client: string;
  className?: string; 
}

const ClientReviewCard = ({ text, client, className = "" }: ClientReviewCardProps) => {
    return (
      <div
        className={`card border-0 p-3 transition-all duration-300 ease-in-out ${className}`}
        style={{ width: "18rem", backgroundColor: "#F5F2ED" }}
      >
        <div className="card-body">
          <i className="ri-double-quotes-l display-1 text-accent"></i>
          <br />
          <strong className="card-text mb-5">{text}</strong>
          <br />
          <br />
          <small className="text-secondary">- {client}</small>
        </div>
      </div>
    );
  };
  
export default ClientReviewCard;

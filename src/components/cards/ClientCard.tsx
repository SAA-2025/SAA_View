interface ClientProps {
  client: {
    id: number;
    name: string;
    description: string;
    logo: string;
    author?: string;
    testimonial?: string;
  };
}

const ClientCard = ({ client }: ClientProps) => {
  return (
    <div className="d-flex shadow my-3 rounded-3 p-3 w-100" >
      <div
        className="d-flex align-items-center justify-content-center bg-light rounded me-3"
        style={{ width: 72, height: 72, overflow: "hidden" }}
      >
        <img
          src={client.logo}
          alt={client.name}
          className="img-fluid"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="card-body">
        <h6 className="m-0 p-0">{client.name}</h6>
        <p className="m-0 p-0 text-secondary">
          <small>{client.description}</small>
        </p>
      </div>
    </div>
  );
};

export default ClientCard;

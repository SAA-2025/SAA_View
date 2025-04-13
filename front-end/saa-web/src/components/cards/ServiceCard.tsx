
interface ServiceCardProps {
    image: string;
    contentLeft: {
        header: string;
        content: string;
    };
    contentRight: {
        header: string;
        content: string;
    }
}

const ServiceCard = ({image, contentLeft, contentRight}: ServiceCardProps) => {
  return (
    <div className="col-12 col-lg-6 p-2">
      <div className="rounded-4 card border-light shadow p-0">
        <img src={image} className="rounded-top-4" alt="" />
        <div className="card-body px-0 row">
          <div className="col d-flex flex-column align-items-center justify-content-center border-end">
            <h3>{contentLeft.header}</h3>
            <p>{contentLeft.content}</p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <h3>{contentRight.header}</h3>
            <p>{contentRight.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

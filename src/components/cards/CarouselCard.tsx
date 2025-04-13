interface CarouselCardProps {
  card: {
    title: string;
    content: string;
    icon: string;
    link: string;
  };
  highlight?: boolean;
}

const CarouselCard = ({ card, highlight }: CarouselCardProps) => {
  return (
    <a href={card.link} className="text-decoration-none d-flex flex-column h-100">
      <div className={`card border-0 px-3 py-5 text-center shadow ${highlight ? "highlight-card" : ""}`}>
        <div className="card-body d-flex flex-column justify-content-center">
          <i className={`ri-${card.icon}-fill display-1`}></i>
          <h5 className="fw-bold fs-4 card-title mt-3">{card.title}</h5>
          <p className="card-text">{card.content}</p>
        </div>
      </div>
    </a>
  );
};

export default CarouselCard;

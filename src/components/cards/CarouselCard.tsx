import React from "react";

interface CarouselCardProps {
  info: {
    id: string;
    title: string;
    shortDescription?: string;
    icon: string;
  };
  isActive?: boolean;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ info, isActive }) => {
  return (
    <a
      href={`/services/${info.id}`}
      className="text-decoration-none"
      onMouseDown={(e) => e.preventDefault()}
    >
      <div
        role="button"
        tabIndex={0}
        className={`card border-0 px-3 py-5 mx-3 my-5 text-center shadow ${
          isActive ? "highlight-card" : ""
        }`}
        style={{ minHeight: "380px", maxHeight: "380px", cursor: "pointer" }}
      >
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i className={`ri-${info.icon}-fill display-1`}></i>
          <h5 className="fw-bold fs-4 card-title mt-3">{info.title}</h5>
          {info.shortDescription && (
            <p className="card-text">{info.shortDescription}</p>
          )}
        </div>
      </div>
    </a>
  );
};

export default CarouselCard;

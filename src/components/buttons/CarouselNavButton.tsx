import React from "react";

interface CarouselNavButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({
  direction,
  onClick,
  className = "",
}) => {

  return (
    <button
      className={`btn btn-theme rounded-circle d-flex align-items-center justify-content-center shadow ${className}`}
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        zIndex: 10,
      }}
      aria-label={`Carousel ${direction} arrow`}
    >
      <i className={`ri-arrow-${direction}-long-line`}></i>
    </button>
  );
};

export default CarouselNavButton;

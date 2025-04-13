import React from "react";
import BasicReactProps from "../../lib/BasicReactProps";
import "./style.css";

interface CarouselNavButtonProps extends BasicReactProps {
  direction: "next" | "prev";
  href?: string;
  [key: string]: any; 
}

const CarouselNavButton = React.forwardRef<HTMLButtonElement, CarouselNavButtonProps>(
  ({ direction, className = "", style, href, ...rest }, ref) => {
    const baseClass = `custom-nav-btn custom-${direction}-btn ${className}`.trim();
    const iconClass = `ri-arrow-${direction === "next" ? "right" : "left"}-long-line`;

    if (href) {
      return (
        <a href={href} className={baseClass} style={style} {...rest}>
          <i className={iconClass}></i>
        </a>
      );
    }

    return (
      <button ref={ref} className={baseClass} style={style} {...rest}>
        <i className={iconClass}></i>
      </button> 
    );
  }
);

CarouselNavButton.displayName = "CarouselNavButton";
export default CarouselNavButton;

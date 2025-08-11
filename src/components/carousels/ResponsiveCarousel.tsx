import React, {
  useState,
  isValidElement,
  cloneElement,
  ReactElement
} from "react";
import Slider, { Settings } from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselNavButton from "../buttons/CarouselNavButton";

type BreakpointSlides = {
  large?: number;
  medium?: number;
  small?: number;
};

type CarouselChildProps = {
  isActive?: boolean;
};

type ResponsiveCarouselProps = {
  children: ReactElement<CarouselChildProps> | ReactElement<CarouselChildProps>[];
  slidesToShow?: BreakpointSlides;
  settings?: Partial<Settings>;
  displayNavButtons?: boolean | undefined
};

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({
  children,
  slidesToShow = { large: 4, medium: 2, small: 1 },
  settings: overrideSettings = {},
  displayNavButtons
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: slidesToShow.large ?? 4,
    centerMode: true,
    centerPadding: "0px",
    afterChange: (current: number) => setActiveIndex(current),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShow.medium,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShow.medium,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: slidesToShow.small,
          centerMode: false,
        },
      },
    ],
  };

  if (displayNavButtons) {
    defaultSettings.nextArrow = <CarouselNavButton direction="right" />
    defaultSettings.prevArrow = <CarouselNavButton direction="left" />
  }

  const mergedSettings = { ...defaultSettings, ...overrideSettings };

  const enhancedChildren = React.Children.map(children, (child, index) =>
    isValidElement<CarouselChildProps>(child)
      ? cloneElement(child, { isActive: index === activeIndex })
      : child
  );

  return (
    <div className="container my-4">
      <Slider {...mergedSettings}>{enhancedChildren}</Slider>
    </div>
  );
};

export default ResponsiveCarousel;

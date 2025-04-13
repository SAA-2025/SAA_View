import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CarouselCard from '../cards/CarouselCard';
import './CardCarousel.css'; // for custom styles
import CarouselNavButton from '../buttons/CarouselNavButton';

interface CardCarouselProps {
  cards: {
    title: string;
    content: string;
    icon: string;
    link: string;
  }[];
}

const CardCarousel = ({ cards }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="my-4 position-relative card-carousel-wrapper">
      <Swiper
        className="card-swiper"
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card, index) => {
          const isMiddleCard =
            window.innerWidth >= 992 && index === activeIndex + 1;
          const isActive = window.innerWidth < 992 && index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div className="slide-inner">
                <CarouselCard card={card} highlight={isMiddleCard || isActive} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      {/* Navigation buttons */}
      <CarouselNavButton ref={prevRef} direction='prev'/>
      <CarouselNavButton ref={nextRef} direction='next'/>
    </div>
  );
};

export default CardCarousel;

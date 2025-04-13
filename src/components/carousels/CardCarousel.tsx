import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CarouselCard from '../cards/CarouselCard';
import './CardCarousel.css';
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
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' && window.innerWidth >= 992
  );
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set Swiper nav buttons after mount
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef.current]);

  return (
    <div className="my-4 position-relative card-carousel-wrapper">
      <Swiper
        className="card-swiper"
        modules={[Navigation]}
        spaceBetween={30}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
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
          const isMiddleCard = isLargeScreen && index === activeIndex + 1;
          const isActive = !isLargeScreen && index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div className="slide-inner">
                <CarouselCard card={card} highlight={isMiddleCard || isActive} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <CarouselNavButton ref={prevRef} direction="prev" />
      <CarouselNavButton ref={nextRef} direction="next" />
    </div>
  );
};

export default CardCarousel;

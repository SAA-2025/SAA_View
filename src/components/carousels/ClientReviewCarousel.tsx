import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ClientReviewCard from '../cards/ClientReviewCard';

interface ClientReviewCarouselProps {
  reviews: {
    text: string;
    client: string;
  }[]
}

const ClientReviewCarousel = ({ reviews }: ClientReviewCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 992);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); 

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef.current, prevRef.current, nextRef.current]);

  return (
    <div className="my-4 position-relative card-carousel-wrapper">
      <Swiper
        className="card-swiper"
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        
        slidesPerGroup={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
      >
        {reviews.map((review, index) => {
          const highlight = (
            (isLargeScreen && index === activeIndex + 1) ||
            (!isLargeScreen && index === activeIndex)
          );
          
          return (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-center align-items-center">
                <ClientReviewCard
                  text={review.text}
                  client={review.client}
                  className={highlight ? '' : 'opacity-50'}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="row p-3">
        <div className="col d-flex align-items-center justify-content-center gap-3">
          <button ref={prevRef} className="btn" aria-label="Previous slide">
            <i className="ri-arrow-left-long-line"></i>
          </button>
          <button ref={nextRef} className="btn" aria-label="Next slide">
            <i className="ri-arrow-right-long-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCarousel;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EmployeeCard from "./EmployeeCard";
import './style.css'


const employees = [
  {
    name: "სახელი გვარი",
    role: "სახლელი გვარი",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    link: "/employee/1",
  },
  {
    name: "სახელი გვარი",
    role: "სახლელი გვარი",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    link: "/employee/2",
  },
  {
    name: "სახელი გვარი",
    role: "სახლელი გვარი",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "/employee/3",
  },
  {
    name: "სახელი გვარი",
    role: "სახლელი გვარი",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    link: "/employee/4",
  },
  {
    name: "სახელი გვარი",
    role: "სახლელი გვარი",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    link: "/employee/5",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const EmployeeCarousel = () => {
  return (
    <Carousel
      swipeable
      draggable
      showDots
      responsive={responsive}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={2000}
      keyBoardControl
      customTransition="all 0.5s"
      transitionDuration={500}
      containerClass="py-4"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {employees.map((employee, idx) => (
        <div key={idx} className="px-3 h-100">
          <EmployeeCard {...employee} />
        </div>
      ))}
    </Carousel>
  );
};

export default EmployeeCarousel;

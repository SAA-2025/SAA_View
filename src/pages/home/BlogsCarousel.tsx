import BlogCard from "../../components/cards/BlogCard";
import "../../../style.css";
import "./home_style.css";
import image from "../../assets/images/blog-card.png";
import pfp from "../../assets/images/Avatar@2x.png";
import CarouselNavButton from "../../components/buttons/CarouselNavButton";


const BlogCarousel = () => {
  const cards = [
    {
      title: "Blog No.1",
      header: "This is card one",
      image: image,
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: pfp,
      },
    },
    {
      title: "Blog No.2",
      header: "This is card two",
      image: image,
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: pfp,
      },
    },
    {
      title: "Blog No.3",
      header: "This is card three",
      image: image,
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: pfp,
      },
    },
    {
      title: "Blog No.4",
      header: "This is card four",
      image: image,
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: pfp,
      },
    },
    {
      title: "Blog No.5",
      header: "This is card five",
      image: image,
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: pfp,
      },
    },
    {
      title: "Blog No.6",
      header: "This is card six",
      image: image,
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: pfp,
      },
    },
  ];

  return (
    <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {cards.map((card, idx) => (
          <div
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
            key={idx}
          >
            <div className="container">
              <div className="row">
                <BlogCard card={card}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CarouselNavButton
        direction="prev"
        className="carousel-control-prev custom-carousel-btn"
        style={{ zIndex: 2 }}
        href="#cardCarousel"
        data-bs-slide="prev"
      />
      
      <CarouselNavButton
        direction="next"
        className="carousel-control-next custom-carousel-btn"
        style={{ zIndex: 2 }}
        href="#cardCarousel"
        data-bs-slide="next"
      />
    </div>
  );
};

export default BlogCarousel;

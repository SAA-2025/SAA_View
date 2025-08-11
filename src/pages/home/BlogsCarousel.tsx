import CarouselBlogCard from "../../components/cards/CarouselBlogCard";
import ResponsiveCarousel from "../../components/carousels/ResponsiveCarousel";

const BlogCarousel = () => {
  const cards = [
    {
      title: "Blog No.1",
      header: "This is card one",
      image: "/images/blog-card.png",
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: "/images/Avatar@2x.png",
      },
    },
    {
      title: "Blog No.2",
      header: "This is card two",
      image: "/images/blog-card.png",
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: "/images/Avatar@2x.png",
      },
    },
    {
      title: "Blog No.3",
      header: "This is card three",
      image: "/images/blog-card.png",
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: "/images/Avatar@2x.png",
      },
    },
    {
      title: "Blog No.4",
      header: "This is card four",
      image: "/images/blog-card.png",
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: "/images/Avatar@2x.png",
      },
    },
    {
      title: "Blog No.5",
      header: "This is card five",
      image: "/images/blog-card.png",
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: "/images/Avatar@2x.png",
      },
    },
    {
      title: "Blog No.6",
      header: "This is card six",
      image: "/images/blog-card.png",
      date: "April 10",
      author: {
        name: "shalva",
        lastName: "baghdavadze",
        position: "CEO",
        pfp: "/images/Avatar@2x.png",
      },
    },
  ];

  return (
    <div className="container">
      <ResponsiveCarousel
        displayNavButtons={true}
        slidesToShow={{ large: 1, medium: 1, small: 1 }}
      >
        {cards.map((blog) => (
          <CarouselBlogCard card={blog} />
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default BlogCarousel;

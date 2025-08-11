import AboutUsHero from "../../components/sections/hero/AboutUsHero";
import MapSection from "../../components/sections/MapSection";
import MediaSection from "../../components/sections/MediaSection";
import EmployeeSection from "./EmployeeSection";
import IntroSection from "./IntroSection";
import ContactSection from "../../components/sections/ContactSection";

import aboutUsData from "../../data/about";


const imageUrls = [
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
  "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
];

const AboutUs = () => {
  return (
    <article>
      <AboutUsHero />
      {aboutUsData.map((item) => (
        <IntroSection key={item.id} item={item} />
      ))}
      <EmployeeSection />
      <MediaSection images={imageUrls} />
      <MapSection />
      <ContactSection />
    </article>
  );
};

export default AboutUs;

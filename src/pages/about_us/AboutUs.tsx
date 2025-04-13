import AboutUsHero from "../../components/sections/hero/AboutUsHero";
import MapSection from "../../components/sections/MapSection";
import MediaSection from "../../components/sections/MediaSection";
import Footer from "../../layout/footer/Footer";
import NavBar from "../../layout/navbar/NavBar";
import OurMission from "./OurMission";
import WhyUs from "./WhyUs";
import ClientRewievs from "./ClientRewievs";
import EmployeeSection from "./EmployeeSection";

const imageUrls = [
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg',
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg',
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg',
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg',
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg',
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg',
  'https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg'
];

const AboutUs = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <AboutUsHero />
        <EmployeeSection/>
        <OurMission />
        <WhyUs />
        <MapSection />
        <MediaSection images={imageUrls}/>
        <ClientRewievs/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AboutUs;

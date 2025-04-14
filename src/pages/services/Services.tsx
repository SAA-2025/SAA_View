import ListHero from "../../components/sections/hero/ListHero";
import InfoCardSection from "../../components/sections/InfoCards/InfoCardSection";
import Footer from "../../layout/footer/Footer";
import NavBar from "../../layout/navbar/NavBar";
import image from "../../assets/images/services-hero-image.png";

const Services = () => {
  const services = [
    {
      title: "ბუღალტერია",
      body: "სერვისების აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "calculator",
      link: "/SAA_View/services/accounting",
    },
    {
      title: "აუდიტი",
      body: "სერვისების აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "file-list",
      link: "/SAA_View/services",
    },
    {
      title: "გადასახადები",
      body: "სერვისების აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "money-dollar-box",
      link: "/SAA_View/services",
    },
    {
      title: "პროგრამების დანერგვა",
      body: "სერვისების აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "shake-hands",
      link: "/SAA_View/services",
    },
    {
      title: "იურიდიული",
      body: "კურსის აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "auction",
      link: "/SAA_View/services",
    },
    {
      title: "არარეზიდენტები",
      body: "სერვისებისa აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "building",
      link: "/SAA_View/services",
    },
  ];

  

  return (
    <>
      <NavBar />
      <ListHero
        header="სერვისები"
        body="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. "
        image={image}
      />
      <InfoCardSection infoCards={services} />
      <Footer />
    </>
  );
};

export default Services;

import ListHero from "../../components/sections/hero/ListHero";
import InfoCardSection from "../../components/sections/InfoCards/InfoCardSection";
import Footer from "../../layout/footer/Footer";
import NavBar from "../../layout/navbar/NavBar";
import image from "../../assets/images/courses.png";

const Courses = () => {
  const courses = [
    {
      title: "მთავარი ბუღალტერი",
      body: "კურსის აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "user-2",
      link: "/courses",
    },
    {
      title: "უნივერსალური",
      body: "კურსის აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "global",
      link: "/courses",
    },
    {
      title: "ACCA",
      body: "კურსის აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "user-2",
      link: "/courses",
    },
    {
      title: "ორისი",
      body: "კურსის აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "user-2",
      link: "/courses",
    },
    {
      title: "ანგარიშგება",
      body: "კურსის აღწერა - რესტორნების ინდუსტრია ბიზნესის გიგანტური თავსატეხია, სადაც საკვები, კულტურა და ფული ერთიანდება. სარესტორნო სფეროში სწორი ბუღალტრული აღრიცხვა კრიტიკულად მნიშვნელოვანია. ",
      icon: "money-dollar-box",
      link: "/courses",
    },
  ];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ListHero
          header="კურსები"
          body="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. "
          image={image}
        />
        <InfoCardSection infoCards={courses} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Courses;

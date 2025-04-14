import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../../assets/logos/logo_32px.png";
import NavItem from "./NavItem";
import DropdownToggleButton from "./DropdownToggleButton";
import NavBarLogo from "./NavBarLogo";

const NavBar = () => {
  const dropdownItems = {
    aboutUs: [
      {text: "ისტორია", link: "/about"},
      {text: "გუნდი", link: "/about"},
      {text: "ხედვა", link: "/about"},
      {text: "რატომ ჩვენ?", link: "/about"},
      {text: "ოფისი", link: "/about"},
      {text: "მედია ჩვენზე", link: "/about"},
      {text: "კლიენტები", link: "/about"}
    ],
    courses: [
      {text: "ყველა", link: "/courses"},
      {text: "უნივერსალური", link: "/courses"},
      {text: "მთავარი ბუღალტერი", link: "/courses"},
      {text: "ACCA", link: "/courses"},
      {text: "ორისი", link: "/courses"},
      {text: "ოფისი", link: "/courses"},
      {text: "ანგარიშგება", link: "/courses"}
    ],
    industry: [
      {text: "წარმოება", link: "/industry/manufacturing"},
      {text: "მომსახურეობა", link: "/about"},
      {text: "ტურიზმი", link: "/about"},
      {text: "მშენებლობა", link: "/about"},
      {text: "მედიცინა", link: "/about"},
      {text: "კვება", link: "/about"},
      {text: "სასტუმრო", link: "/about"},
      {text: "ვაჭრობა", link: "/about"},
      {text: "ლოკისტიკა", link: "/about"},
      {text: "მედია", link: "/about"}
    ],
    services: [
      {text: "ყველა", link: "/services"},
      {text: "ბუღალტერია", link: "/services"},
      {text: "აუდიტი", link: "/services"},
      {text: "გადასახადები", link: "/services"},
      {text: "პროგრამების დანერგვა", link: "/services"},
      {text: "იურიდიული", link: "/services"},
      {text: "არარეზიდენტები", link: "/services"}
    ],
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid px-lg-5">
          <NavBarLogo logo={logo} />
          <DropdownToggleButton />
          <div
            className="collapse navbar-collapse flex-column align-items-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavItem text="მთავარი" link="/" />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="ჩვენ შესახებ"
                  link="/about"
                  isDropdown={true}
                  dropdownItems={dropdownItems.aboutUs}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="სერვისები"
                  link="/services"
                  isDropdown={true}
                  dropdownItems={dropdownItems.services}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="ინდუსტრია"
                  link="/industry"
                  isDropdown={true}
                  dropdownItems={dropdownItems.industry}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="კურსი"
                  link="/courses"
                  isDropdown={true}
                  dropdownItems={dropdownItems.courses}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="ბლოგები"
                  link="/blogs"
                />
              </li>
              <li className="nav-item">
                <NavItem text="კონტაქტი" link="/#contact" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

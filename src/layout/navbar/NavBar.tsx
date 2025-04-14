import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../../assets/logos/logo_32px.png";
import NavItem from "./NavItem";
import DropdownToggleButton from "./DropdownToggleButton";
import NavBarLogo from "./NavBarLogo";

const NavBar = () => {
  const dropdownItems = {
    aboutUs: [
      {text: "ისტორია", link: "/SAA_View/about"},
      {text: "გუნდი", link: "/SAA_View/about"},
      {text: "ხედვა", link: "/SAA_View/about"},
      {text: "რატომ ჩვენ?", link: "/SAA_View/about"},
      {text: "ოფისი", link: "/SAA_View/about"},
      {text: "მედია ჩვენზე", link: "/SAA_View/about"},
      {text: "კლიენტები", link: "/SAA_View/about"}
    ],
    courses: [
      {text: "ყველა", link: "/SAA_View/courses"},
      {text: "უნივერსალური", link: "/SAA_View/courses"},
      {text: "მთავარი ბუღალტერი", link: "/SAA_View/courses"},
      {text: "ACCA", link: "/SAA_View/courses"},
      {text: "ორისი", link: "/SAA_View/courses"},
      {text: "ოფისი", link: "/SAA_View/courses"},
      {text: "ანგარიშგება", link: "/SAA_View/courses"}
    ],
    industry: [
      {text: "წარმოება", link: "/SAA_View/industry/manufacturing"},
      {text: "მომსახურეობა", link: "/SAA_View/about"},
      {text: "ტურიზმი", link: "/SAA_View/about"},
      {text: "მშენებლობა", link: "/SAA_View/about"},
      {text: "მედიცინა", link: "/SAA_View/about"},
      {text: "კვება", link: "/SAA_View/about"},
      {text: "სასტუმრო", link: "/SAA_View/about"},
      {text: "ვაჭრობა", link: "/SAA_View/about"},
      {text: "ლოკისტიკა", link: "/SAA_View/about"},
      {text: "მედია", link: "/SAA_View/about"}
    ],
    services: [
      {text: "ყველა", link: "/SAA_View/services"},
      {text: "ბუღალტერია", link: "/SAA_View/services"},
      {text: "აუდიტი", link: "/SAA_View/services"},
      {text: "გადასახადები", link: "/SAA_View/services"},
      {text: "პროგრამების დანერგვა", link: "/SAA_View/services"},
      {text: "იურიდიული", link: "/SAA_View/services"},
      {text: "არარეზიდენტები", link: "/SAA_View/services"}
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
                <NavItem text="მთავარი" link="/SAA_View" />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="ჩვენ შესახებ"
                  link="/SAA_View/about"
                  isDropdown={true}
                  dropdownItems={dropdownItems.aboutUs}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="სერვისები"
                  link="/SAA_View/services"
                  isDropdown={true}
                  dropdownItems={dropdownItems.services}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="ინდუსტრია"
                  link="/SAA_View/industry"
                  isDropdown={true}
                  dropdownItems={dropdownItems.industry}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="კურსი"
                  link="/SAA_View/courses"
                  isDropdown={true}
                  dropdownItems={dropdownItems.courses}
                />
              </li>
              <li className="nav-item dropdown">
                <NavItem
                  text="ბლოგები"
                  link="/SAA_View/blogs"
                />
              </li>
              <li className="nav-item">
                <NavItem text="კონტაქტი" link="/SAA_View#contact" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

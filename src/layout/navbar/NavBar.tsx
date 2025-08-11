import NavItem from "./NavItem";
import DropdownToggleButton from "./DropdownToggleButton";
import logo from "../../assets/logos/logo_32px.png";
import navLinks from "../../data/navigation.links";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-lg-5">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo goes here" />
          </a>
          <DropdownToggleButton />
          <div
            className="collapse navbar-collapse flex-column align-items-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {navLinks.map((link, index) => (
                <NavItem
                  key={index}
                  text={link.text}
                  link={link.link}
                  isDropdown={!!link.dropdownItems}
                  dropdownItems={link.dropdownItems}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

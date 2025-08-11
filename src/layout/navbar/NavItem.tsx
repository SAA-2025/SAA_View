import DropdownMenu from "./DropdownMenu";
import { NavbarLinkProps } from "../../lib/navbar.props";

const NavItem = ({ text, link, isDropdown = false, dropdownItems = [] }: NavbarLinkProps) => {
  const isValidDropdown = isDropdown && dropdownItems.length > 0;

  return (
    <li className={`nav-item ${isValidDropdown ? "dropdown" : ""}`}>
      <a
        className={`nav-link fw-bold gradient-text ${isValidDropdown ? "dropdown-toggle" : ""}`}
        href={isValidDropdown ? "#" : `/${link}`}
        role={isValidDropdown ? "button" : undefined}
        data-bs-toggle={isValidDropdown ? "dropdown" : undefined}
        aria-expanded={isValidDropdown ? "false" : undefined}
        onClick={isValidDropdown ? (e) => e.preventDefault() : undefined}
      >
        {text}
      </a>

      {isValidDropdown && <DropdownMenu dropdownItems={dropdownItems} />}
    </li>
  );
};

export default NavItem;

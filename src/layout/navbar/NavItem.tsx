import DropdownMenu from "./DropdownMenu";


interface NavItemProps {
    text: string,
    link: string,
    isDropdown?: boolean,
    dropdownItems?: {
        text: string;
        link: string;
    }[]
}


const NavItem = ({text, link, dropdownItems, isDropdown}: NavItemProps) => {
    return (
        <li className="nav-item dropdown">
            <a
                className={`nav-link fw-bold gradient-text ${isDropdown ? 'dropdown-toggle' : ''}`}
                href={link}
                role={isDropdown ? 'button' : undefined}
                data-bs-toggle={isDropdown ? 'dropdown' : undefined}
                aria-expanded={isDropdown ? 'false' : undefined}
            >
                {text}
            </a>
            {isDropdown && (
                <DropdownMenu dropdownItems={dropdownItems}/>
            )}
        </li>
    )
}

export default NavItem;
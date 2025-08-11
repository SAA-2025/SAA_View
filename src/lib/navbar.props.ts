interface NavbarLinkProps {
    text: string;
    link: string;
    isDropdown?: boolean;
    dropdownItems?: {
        text: string;
        link: string;
    }[];
};

export type { NavbarLinkProps };
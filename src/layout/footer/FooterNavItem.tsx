interface FooterNavItemProps {
    itemProp: {
        text: string,
        link: string
    }
}

const FooterNavItem = ({ itemProp }: FooterNavItemProps) => {
    return (
        <li className="nav-item">
            <a 
                rel="noopener noreferrer" 
                className="fw-bold nav-link px-2 text-body-secondary"
                href={itemProp.link} 
            >
                {itemProp.text}
            </a>
        </li>
    );
};


export default FooterNavItem
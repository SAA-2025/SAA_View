import FooterNavItem from "./FooterNavItem"

interface FooterNavItemsProps {
    itemProps: {
        text: string,
        link: string
    }[]
}

const FooterNavItems = ({itemProps}: FooterNavItemsProps) => {
    return (
        <ul className="nav justify-content-center pb-3 mb-3 gap-3">
            {itemProps.map((itemProp) => (
                <FooterNavItem itemProp={itemProp}/>
            ))}
        </ul>
    )
}

export default FooterNavItems;
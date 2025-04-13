import FooterNavItems from "./FooterNavItems";
import logo from '../../assets/logos/logo_256px.png'
import SocialMedia from "./SocialMedia";


const Footer = () => {
    const currentYear: number = new Date().getFullYear();

    const socialMedia = [
        {icon: "twitter", link: "https://x.com"},
        {icon: "instagram", link: "https://instagram.com"},
        {icon: "facebook", link: "https://www.facebook.com/smartaccountingadvisories"},
        {icon: "linkedin", link: "https://linkedin.com"}
    ]

    const navItems = [
        { text: "მთავარი", link: "/" },
        { text: "ჩვენ შესახებ", link: "/about" },
        { text: "სერვისები", link: "/services" },
        { text: "ინდუსტრია", link: "/industry" },
        { text: "კურსი", link: "/courses" },
        { text: "ბლოგი", link: "/blogs" },
        { text: "კონტაქტი", link: "/#contacts" },
    ]

    const style: React.CSSProperties = {
        backgroundColor: '#F5F5F5',
    }

    return (
        <footer className="py-5" style={style}>
            <div className="d-flex flex-column align-items-center">
                <img
                    src={logo}
                    alt="logo goes here"
                    className="mb-3"
                    style={{ maxWidth: "96px", height: "auto" }}
                />
            </div>

            <div className="d-flex justify-content-center">
                <FooterNavItems itemProps={navItems} />
            </div>

            <SocialMedia socials={socialMedia}/>

            <p className="text-center text-body-secondary mt-3">
                © {currentYear} ყველა უფლება დაცულია
            </p>
        </footer>

    )
}

export default Footer
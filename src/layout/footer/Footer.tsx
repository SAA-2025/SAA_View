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
        { text: "მთავარი", link: "/SAA_View/" },
        { text: "ჩვენ შესახებ", link: "/SAA_View/about" },
        { text: "სერვისები", link: "/SAA_View/services" },
        { text: "ინდუსტრია", link: "/SAA_View/industry" },
        { text: "კურსი", link: "/SAA_View/courses" },
        { text: "ბლოგი", link: "/SAA_View/blogs" },
        { text: "კონტაქტი", link: "/SAA_View/#contacts" },
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
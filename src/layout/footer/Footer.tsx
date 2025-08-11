import FooterNavItems from "./FooterNavItems";
import logo from '../../assets/logos/logo_256px.png'
import SocialMedia from "./SocialMedia";
import socials from "../../data/socials";


const Footer = () => {
    const currentYear: number = new Date().getFullYear();

    const navItems = [
        { text: "მთავარი", link: "/" },
        { text: "ჩვენ შესახებ", link: "/about-us/" },
        { text: "სერვისები", link: "/services/" },
        { text: "კურსი", link: "/courses/" },
        { text: "ბლოგი", link: "/blogs/" },
        { text: "კონტაქტი", link: "#contact-section" },
    ]


    return (
        <footer className="py-5 bg-body-tertiary">
            <a href="/#main-hero">
                <div className="d-flex flex-column align-items-center">
                    <img
                        src={logo}
                        alt="logo goes here"
                        className="mb-3"
                        style={{ maxWidth: "96px", height: "auto" }}
                    />
                </div>
            </a>

            <div className="d-flex justify-content-center">
                <FooterNavItems itemProps={navItems} />
            </div>

            <SocialMedia socials={socials}/>

            <p className="text-center text-body-secondary mt-3">
                © {currentYear} ყველა უფლება დაცულია
            </p>
        </footer>

    )
}

export default Footer
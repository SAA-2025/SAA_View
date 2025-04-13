interface NavBarLogoProps {
    logo: string
}

const NavBarLogo = ({logo}: NavBarLogoProps) => {
    return (
        <a className="navbar-brand" href="/SAA_View/#">
            <img src={logo} alt="logo goes here" />
        </a>
    )
}

export default NavBarLogo;
interface NavBarLogoProps {
    logo: string
}

const NavBarLogo = ({logo}: NavBarLogoProps) => {
    return (
        <a className="navbar-brand" href="/#">
            <img src={logo} alt="logo goes here" />
        </a>
    )
}

export default NavBarLogo;
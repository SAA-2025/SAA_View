import SocialButton from "../../components/buttons/SocialButton"

interface SocialMediaProps {
    socials: {
        icon: string,
        link: string
    } []
}

const SocialMedia = ({socials = []}: SocialMediaProps) => {
    
    return (
        <ul className="list-unstyled d-flex justify-content-center gap-3">
            {socials.map(social => (
                <SocialButton social={social}/>
            ))}
        </ul>
    )
}

export default SocialMedia
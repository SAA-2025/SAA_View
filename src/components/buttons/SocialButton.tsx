import "remixicon/fonts/remixicon.css";

interface SocialButtonProps {
    social: {
        icon: string;
        link: string;
    };
}

const SocialButton = ({ social }: SocialButtonProps) => {

    return (
        <li>
            <a 
                href={social.link} 
                target="_blank" 
                className="btn bg-white d-flex align-items-center justify-content-center text-secondary btn-social"
            >
                <i className={`ri-${social.icon}-line`}></i>
            </a>
        </li>
    );
};

export default SocialButton;

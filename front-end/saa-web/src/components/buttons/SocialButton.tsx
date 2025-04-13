import "remixicon/fonts/remixicon.css";
import './style.css'

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
                className="btn bg-white text-secondary btn-social"
            >
                <i className={`ri-${social.icon}-line`}></i>
            </a>
        </li>
    );
};

export default SocialButton;

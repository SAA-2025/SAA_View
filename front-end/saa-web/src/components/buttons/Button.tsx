interface ButtonProps {
    text: string;
    href: string;
    target?: string;
    className?: string;
  }
  
  const Button = ({ text, href, target, className = "" }: ButtonProps) => {
    const baseClass = `btn btn-theme rounded-pill px-5 ${className}`;
  
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClass}
      >
        {text}
      </a>
    );
  };
  
  export default Button;
  
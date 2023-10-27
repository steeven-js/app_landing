import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
  targetBlank?: boolean;
}

const Button = ({ type, title, icon, variant, full, href, targetBlank }: ButtonProps) => {
  const buttonContent = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </>
  );

  if (href) {
    // Si la prop href est fournie, nous utilisons un lien <a>.
    return (
      <a
        href={href}
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
        target={targetBlank ? '_blank' : undefined}
        rel={targetBlank ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  } else {
    // Si href n'est pas fourni, nous rendons simplement un bouton.
    return (
      <button
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
        type={type}
      >
        {buttonContent}
      </button>
    );
  }
}

export default Button;

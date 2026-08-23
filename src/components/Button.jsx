import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  icon = true,
  type = "button",
  ...props
}) {
  const className =
    variant === "secondary" ? "secondary-button" : "primary-button";

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} />}
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} type={type} {...props}>
      {content}
    </button>
  );
}

export default Button;

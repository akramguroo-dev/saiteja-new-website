import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Button({
  children,
  href,
  to,
  variant = 'primary',
  icon = true,
  ...props
}) {
  const className =
    variant === 'secondary'
      ? 'secondary-button'
      : 'primary-button'

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
        {icon && <ArrowRight size={18} />}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    )
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  )
}

export default Button
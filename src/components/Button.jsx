import { ArrowRight } from 'lucide-react'

function Button({
  children,
  href,
  variant = 'primary',
  icon = true,
  ...props
}) {
  const className =
    variant === 'secondary'
      ? 'secondary-button'
      : 'primary-button'

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
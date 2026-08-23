function SectionHeading({ label, title, highlight, description }) {
  return (
    <div className="section-heading-row">
      <div>
        {label && <div className="section-label">{label}</div>}

        <h2>
          {title}
          {highlight && <span>{highlight}</span>}
        </h2>
      </div>

      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
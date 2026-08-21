import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Megaphone,
  Users,
} from 'lucide-react'

const services = [
  {
    icon: Users,
    number: '01',
    title: 'HR & Staffing',
    description:
      'Flexible workforce solutions that connect organizations with the right people and capabilities.',
  },
  {
    icon: Code2,
    number: '02',
    title: 'IT Solutions',
    description:
      'Technology solutions designed to help businesses improve processes, productivity and digital capabilities.',
  },
  {
    icon: BrainCircuit,
    number: '03',
    title: 'AI & Data Solutions',
    description:
      'Practical approaches to data and intelligent technology that turn information into business value.',
  },
  {
    icon: Megaphone,
    number: '04',
    title: 'Branding & Digital',
    description:
      'Creative and digital solutions that help organizations communicate their identity and reach their audience.',
  },
  {
    icon: GraduationCap,
    number: '05',
    title: 'Training & Development',
    description:
      'Learning and development opportunities designed to strengthen skills and prepare people for what comes next.',
  },
  {
    icon: BriefcaseBusiness,
    number: '06',
    title: 'Recruitment',
    description:
      'Talent acquisition support focused on finding professionals aligned with organizational needs.',
  },
]

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="section-label">OUR SERVICES</div>

        <h1>
          Capabilities built
          <span> around your goals.</span>
        </h1>

        <p>
          From people and technology to branding and training, we bring
          complementary capabilities together to help organizations move
          forward.
        </p>
      </section>

      <section className="services-list-section">
        <div className="services-intro">
          <div className="section-label">WHAT WE DO</div>

          <h2>
            One ecosystem.
            <span> Multiple capabilities.</span>
          </h2>
        </div>

        <div className="services-detail-grid">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article className="service-detail-card" key={title}>
              <div className="service-detail-top">
                <span>{number}</span>

                <div className="service-detail-icon">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
              </div>

              <h3>{title}</h3>

              <p>{description}</p>

              <a href="/contact">
                Learn more
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div>
          <div className="section-label">NEED A SOLUTION?</div>

          <h2>
            Let's understand
            <span> your challenge.</span>
          </h2>

          <p>
            Tell us what you're trying to achieve and let's explore the
            right approach together.
          </p>
        </div>

        <a className="primary-button" href="/contact">
          Start a Conversation <ArrowRight size={18} />
        </a>
      </section>
    </main>
  )
}

export default Services